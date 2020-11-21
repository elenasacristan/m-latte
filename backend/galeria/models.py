from django.db import models
from cloudinary.models import CloudinaryField

class Foto(models.Model):
    year = models.IntegerField(null=True, blank=True)
    lugar = models.CharField(max_length=120, null=True, blank=True)
    titulo =  models.CharField(max_length=400, null=True, blank=True)
    foto = CloudinaryField('foto', null=True, blank=True)

    def __str__(self):
        return self.titulo

class Video(models.Model):
    titulo =  models.CharField(max_length=120, null=True, blank=True)
    videoId =  models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.titulo

