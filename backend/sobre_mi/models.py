from django.db import models

class SobreMi(models.Model):
    titulo1 =  models.CharField(max_length=100, null=True, blank=True)
    titulo2 =  models.CharField(max_length=100, null=True, blank=True)
    imagen_marta = models.ImageField(upload_to="images", null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)
    titulo3 =  models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        verbose_name_plural = "sobre_mi"
   
    def __str__(self):
        return self.titulo1

class Disco(models.Model):
    year = models.CharField(max_length=100, null=True, blank=True)
    titulo = models.CharField(max_length=100, null=True, blank=True)
    autor = models.CharField(max_length=100, null=True, blank=True)    
    imagen_disco = models.ImageField(upload_to="images", null=True, blank=True)
    descripcion = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.titulo