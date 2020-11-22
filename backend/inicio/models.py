from django.db import models
from cloudinary.models import CloudinaryField

class Inicio(models.Model):
    frase =  models.CharField(max_length=400, null=True, blank=True)
    author =  models.CharField(max_length=100, null=True, blank=True)
    imagen_inicio = CloudinaryField('imagen_inicio', null=True, blank=True)
    title2 =  models.CharField(max_length=400, null=True, blank=True)

    class Meta:
        verbose_name_plural = "1 - INICIO"
   
    def __str__(self):
        return 'Haz click aquí para modificar, texto, autor o imagen de inicio'

class QueQueremos(models.Model):
    logo_name =  models.CharField(max_length=20, null=True, blank=True)
    titulo =  models.CharField(max_length=30, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "1.2 - QUE QUEREMOS"

    def __str__(self):
        return f'{self.titulo.upper()} - click para modificar'


class QueHacemos(models.Model):
    logo_name =  models.CharField(max_length=20, null=True, blank=True)
    titulo =  models.CharField(max_length=30, null=True, blank=True)
    text_boton = models.CharField(max_length=30, null=True, blank=True)

    class Meta:
        verbose_name_plural = "1.3 - QUE HACEMOS"

    def __str__(self):
        return f'{self.titulo.upper()} - click para modificar'
