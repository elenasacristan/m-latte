# Generated by Django 3.1.2 on 2020-11-20 18:20

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('inicio', '0006_auto_20201120_1451'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inicio',
            name='imagen_inicio',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='imagen_inicio'),
        ),
    ]
