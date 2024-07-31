from django.db import models
from UserManagement.models import (
    CustomUser,
)


class Room(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name

class Message(models.Model):
    sender = models.ForeignKey(CustomUser, related_name="sender",on_delete=models.CASCADE)
    receiver = models.ForeignKey(CustomUser, related_name="receiver",  on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    message = models.TextField()

    def __str__(self) -> str:
        return self.sender.first_name + " " + self.receiver.first_name
        
    
    