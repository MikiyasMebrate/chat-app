from django.db import models
from UserManagement.models import (
    CustomUser,
)


class Room(models.Model):
    user1 = models.ForeignKey(CustomUser, related_name="user1",on_delete=models.CASCADE)
    user2 = models.ForeignKey(CustomUser, related_name="user2",on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.user1.first_name + self.user2.first_name

class Message(models.Model):
    sender = models.ForeignKey(CustomUser, related_name="sender",on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    message = models.TextField()
    time_stamp = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.sender.first_name 
        
    
    