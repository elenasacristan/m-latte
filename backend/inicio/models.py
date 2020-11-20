from django.db import models

class Inicio(models.Model):
    frase =  models.CharField(max_length=400, null=True, blank=True)
    author =  models.CharField(max_length=100, null=True, blank=True)
    imagen_inicio = models.ImageField(upload_to="images", null=True, blank=True)
    title2 =  models.CharField(max_length=400, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Inicio-info"
   
    def __str__(self):
        return self.frase

class QueQueremos(models.Model):
    logo_name =  models.CharField(max_length=20, null=True, blank=True)
    titulo =  models.CharField(max_length=30, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "que_queremos"

    def __str__(self):
        return self.titulo


class QueHacemos(models.Model):
    logo_name =  models.CharField(max_length=20, null=True, blank=True)
    titulo =  models.CharField(max_length=30, null=True, blank=True)
    text_boton = models.CharField(max_length=30, null=True, blank=True)

    class Meta:
        verbose_name_plural = "que_hacemos"

    def __str__(self):
        return self.titulo
