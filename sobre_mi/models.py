from django.db import models
from cloudinary.models import CloudinaryField


class SobreMi(models.Model):
    titulo0 = models.CharField(max_length=100, null=True, blank=True)
    descripcion0 = models.TextField(null=True, blank=True)
    titulo1 =  models.CharField(max_length=100, null=True, blank=True)
    titulo2 =  models.CharField(max_length=100, null=True, blank=True)
    imagen_marta = CloudinaryField('imagen_marta', null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    titulo3 =  models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        verbose_name_plural = "2. SOBRE MUSICA LATTE"
   
    def __str__(self):
        return f'{self.titulo1.upper()} - click para modificar'

class Disco(models.Model):
    year = models.IntegerField(null=True, blank=True)
    lugar = models.CharField(max_length=100, null=True, blank=True)
    titulo = models.CharField(max_length=100, null=True, blank=True)
    autor = models.CharField(max_length=100, null=True, blank=True)    
    imagen_disco = CloudinaryField('imagen_disco', null=True, blank=True)
    titulo1 = models.CharField(max_length=50, null=True, blank=True) 
    colaboraciones = models.TextField(null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "2.1 DISCOS"

    def __str__(self):
        return f'{self.titulo.upper()} - click para modificar'