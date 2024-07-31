from django.urls import path 
from .views import( get_message , user_list, chat)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



urlpatterns = [
    path('',chat, name="chat" ),
   path('user_list/' , user_list , name="user_list"),
   path('get_message/<str:sender_phone>/<str:receiver_phone>' , get_message , name="get_message"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
