from django.db import models

class Foto(models.Model):
    titulo =  models.CharField(max_length=120, null=True, blank=True)
    foto = models.ImageField(upload_to="images", null=True, blank=True)

    def __str__(self):
        return self.titulo

class Video(models.Model):
    titulo =  models.CharField(max_length=120, null=True, blank=True)
    videoId =  models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.titulo

