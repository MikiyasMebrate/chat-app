from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from rest_framework.decorators import api_view
from .models import (
    Message,
    Room
)

from UserManagement.models import CustomUser , ProfilePicture

# Create your views here. 

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)


        # Add custom claims
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['username'] = user.username
        token['phone'] = user.phone
        token['bio'] = user.bio
        token['gender'] = user.gender
           

        return token
    



def chat(request):
    Message.objects.create(message = "Hello", room__id = 16, sender__id=4)
    return render(request, "base/chat.html")


@api_view(['GET'])
def user_list(request):
    user = list(CustomUser.objects.all().values())
    context = {
        "user" : user
    }
    return Response(context , status=status.HTTP_200_OK)


@api_view(['GET'])
def get_message(request , room_id):
    if request.method == 'GET':                                
        message = list(Message.objects.filter(room__id = room_id).values())
        context = {
        "message" : message
              }
        return Response(context , status=status.HTTP_200_OK)



@api_view(['GET', 'POST'])
@login_required()
def user_profile(request):

    
    if request.method == 'GET':
        user = request.user
        photo = None
        try:
            photo = list(ProfilePicture.objects.filter(user = user).values_list('picture').last())[0]
        except : None
        context = {
              "id" : user.pk,
              "first_name" : user.first_name,
              "last_name" : user.last_name,
              "username" : user.username,
              "phone" : user.phone,
              "bio" : user.bio,
              "photo" : {'picture' : photo }
         }
        return JsonResponse(context, status=status.HTTP_200_OK)
    

    if request.method == "POST":
         
            user = CustomUser.objects.get(id = request.user.id)


            photo = ProfilePicture()
        
    
            user.first_name = request.data['first_name']
            user.last_name = request.data['last_name']
            user.username = request.data['username']
            user.phone = request.data['phone']
            user.bio = request.data['bio'] if request.data['bio'] else  ""
            user.save()

            photo.user = user
            try:
                photo.picture = request.data['photo[]'] if request.data['photo[]'] else None
                photo.save()
            except:
                pass
            
        
    return Response({"profile" : 'profile'}, status=status.HTTP_200_OK)


@api_view(['GET'])
def contact_lists(request):
    if request.method == 'GET':
        user_lists =  []
        for user in CustomUser.objects.filter(~Q(id = request.user.id)):
            photo = list(ProfilePicture.objects.filter(user = user).values_list('picture').last())[0]
            user_lists.append({
                'id' : user.pk,
                'username' : user.username,
                'first_name' : user.first_name,
                'last_name' : user.last_name,
                'phone' : user.phone,
                'photo' : photo
            })
    
        context = {
            'contacts' : user_lists
        }

        return Response(context, status=status.HTTP_200_OK)
    
@api_view(['POST'])
def createRoom(request):
    if request.method == 'POST':
        user1 = request.user
        user2 = CustomUser.objects.get(username = request.data["user2"])

        room = Room.objects.filter(Q(user1 = user1, user2=user2) | Q(user1 = user2, user2=user1) ).first()
        
        if not room:
            room = Room()
            room.user1 = user1
            room.user2 = user2
            room.save()

        user2_data = []
        photo = list(ProfilePicture.objects.filter(user = user2).values_list('picture').last())[0]
        user2_data.append({
                'username' : user2.username,
                'first_name' : user2.first_name,
                'last_name' : user2.last_name,
                'phone' : user2.phone,
                'photo' : photo
            })
        
        messages = list(Message.objects.filter(room = room).values())

        context = {
            'room' : room.id,
            'user2' : user2_data,
            'messages' : messages
            
        }
        return Response(context, status=status.HTTP_200_OK)