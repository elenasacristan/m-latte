# Generated by Django 3.1.2 on 2020-11-20 18:42

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sobre_mi', '0002_disco_lugar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sobremi',
            name='imagen_marta',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='imagen_marta'),
        ),
    ]