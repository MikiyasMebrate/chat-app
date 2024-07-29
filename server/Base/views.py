from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import (
    Message
)
from UserManagement.models import CustomUser , ProfilePicture
# Create your views here. 

@api_view(['GET'])
def user_list(request):
    user = list(CustomUser.objects.all().values())
    context = {
        "user" : user
    }
    return Response(context , status=status.HTTP_200_OK)


@api_view(['GET'])
def get_message(request , sender_phone , receiver_phone):
    if request.method == 'GET':                                
        message = list(Message.objects.filter(sender__phone = sender_phone , receiver__phone = receiver_phone).values())
        context = {
        "message" : message
              }
        return Response(context , status=status.HTTP_200_OK)
