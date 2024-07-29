from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.html import mark_safe
# Create your models here.

gender_list = [
    ('male', 'Male'),
    ('female', 'Female'),
]

class CustomUser(AbstractUser):
    gender = models.CharField( max_length=50, choices=gender_list, null=True , blank=True )
    date_of_birth = models.DateField(auto_now=False, auto_now_add=False , null=True , blank=True)
    phone = models.CharField(max_length=50, unique=True)
    bio = models.CharField( max_length=50,  null=True , blank=True )

    USERNAME_FIELD='phone'
    REQUIRED_FIELDS=['first_name','last_name','username']



class ProfilePicture(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to='profile/', null=True , blank=True)

    def __str__(self):
        return self.user.first_name
    
   
    
