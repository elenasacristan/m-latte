from django.db import models
from datetime import datetime

class Contacto(models.Model):
    nombre =  models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=254, null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    fecha = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name_plural = "6. VER EMAILS"

    def __str__(self):
        return self.email

class IntroContacto(models.Model):
    titulo = models.CharField(max_length=100, null=True, blank=True)
    texto = models.TextField(null=True, blank=True)
    text_bold = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "6.1 TEXTO CONTACTO"

    def __str__(self):
        return f'{self.titulo.upper()} - click para modificar'
