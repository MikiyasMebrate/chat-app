from channels.generic.websocket import WebsocketConsumer,AsyncWebsocketConsumer
import json
from asgiref.sync import async_to_sync
from channels.db import database_sync_to_async



from .models import Room


class ChatConsumer(AsyncWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.room_id = None
        self.room_name= None

    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        
        self.room_group_name = f'{self.room_name}'

        self.room_id = await self.chat_room(1)

        if self.room_id is not None:
            print("ID---",self.room_id.id)

        await (self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

        await self.send(text_data=json.dumps({
            'type' : 'connection_established',
            'message': self.room_id.id,
        }))
    
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        #await self.chat_message(text_data)



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

