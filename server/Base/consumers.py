from channels.generic.websocket import AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync
from channels.db import database_sync_to_async



from .models import Room, Message
from UserManagement.models import CustomUser


class ChatConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.room_id = None
        self.room_name= None

    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        print(">>>",self.room_name)
        self.room_group_name = f'{self.room_name}'

        self.room_id = await self.chat_room(self.room_name)

        await (self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

        # await self.send(text_data=json.dumps({
        #     'type' : f'connection_established {self.room_name}',
        #     'message': self.room_id.id,
        # }))
    
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']


        saved_message = await self.save_messages(message['msg'], message['id'])

        await (self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type' : 'chat_message',
                'message' : message
            }
        )
    
    async def chat_message(self, event):
        message = event['message']

    

        await self.send(text_data=json.dumps({
            'type' : 'chat',
            'message': message,
        }))

    
    async def chat_room(self, chat_id):
         return await database_sync_to_async(Room.objects.get)(id=chat_id)
    
    async def save_messages(self, message, sender_id):
        sender = await self.get_sender(sender_id)
        saved_message = await self.create_message(sender, message)
        return saved_message

    async def get_sender(self, sender_id):
        # Fetch the sender using async
        return await database_sync_to_async(CustomUser.objects.get)(pk=sender_id)

    async def create_message(self, sender, message):
        # Create the message using async
        return await database_sync_to_async(self._sync_create_message)(sender, message)

    def _sync_create_message(self, sender, message):
        # Synchronous function to create a message
        return Message.objects.create(room=self.room_id, sender=sender, message=message)

