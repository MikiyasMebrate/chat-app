from django.contrib import admin
from django.utils.html import format_html
from .models import (
    CustomUser,
    ProfilePicture
)

# Register your models here.
class AdminUsers(admin.ModelAdmin):
    list_display = ('first_name', 'last_name','username', 'phone')


admin.site.register(CustomUser, AdminUsers)



class AdminProfile(admin.ModelAdmin):
    model = ProfilePicture
    

    def get_first_name(self, obj):
        return obj.user.first_name 
    
    def get_last_name(self, obj):
        return obj.user.last_name 
    
    def image_tag(self, obj):
        return format_html(f'<img src="/media/{obj.picture}" style="width="35" height="35" />')
    
    list_display = ('get_first_name','get_last_name','image_tag')


admin.site.register(ProfilePicture, AdminProfile)