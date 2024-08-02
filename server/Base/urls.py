from django.urls import path 
from . import views 

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



urlpatterns = [
   path('',views.chat, name="chat" ),
   path('user_list/' , views.user_list , name="user_list"),
   path('get_message/<str:room_id>/' , views.get_message , name="get_message"),
   
   path('user-profile/',views.user_profile, name="user_profile" ),
   path('contact-lists/', views.contact_lists, name="contact_lists"),
   path('create-room/', views.createRoom, name='create-room'),




   path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
