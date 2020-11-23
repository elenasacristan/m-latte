from django.db import models
from cloudinary.models import CloudinaryField

class TipoActividad(models.Model):
    nombre =  models.CharField(max_length=20, null=True, blank=True)

    class Meta:
        verbose_name_plural = "3. TIPO DE ACTIVIDAD"

    def __str__(self):
        return f'{self.nombre.upper()} - click para modificar'


class Actividad(models.Model):
    tipo_actividad = models.ForeignKey(TipoActividad, related_name='actividades', on_delete=models.CASCADE)
    foto = CloudinaryField('foto', null=True, blank=True)
    titulo =  models.CharField(max_length=100, null=True, blank=True)
    text_boton = models.CharField(max_length=30, null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    logo_name =  models.CharField(max_length=20, null=True, blank=True)
    titulo2 =  models.CharField(max_length=100, null=True, blank=True)
    destinatarios = models.TextField(null=True, blank=True)
    titulo3 = models.CharField(max_length=100, null=True, blank=True)
    autor = models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        verbose_name_plural = "3.1 ACTIVIDADES"

    def __str__(self):
        return f'{self.titulo.upper()} / ({self.tipo_actividad.nombre}) - click para modificar'

