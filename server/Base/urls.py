from django.urls import path 
from .views import get_message , user_list

urlpatterns = [
   path('user_list/' , user_list , name="user_list"),
   path('get_message/<str:sender_phone>/<str:receiver_phone>' , get_message , name="get_message"),
]
