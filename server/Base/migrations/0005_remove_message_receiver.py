# Generated by Django 4.2 on 2024-08-02 09:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Base', '0004_message_time_stamp'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='receiver',
        ),
    ]
