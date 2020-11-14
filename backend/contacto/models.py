from django.db import models
from datetime import datetime

class Contacto(models.Model):
    nombre =  models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=254, null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    fecha = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name_plural = "Emails"

    def __str__(self):
        return self.email

