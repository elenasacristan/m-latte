from django.db import models

class Footer(models.Model):
    titulo =  models.CharField(max_length=200, null=True, blank=True)
    titulo2 =  models.CharField(max_length=200, null=True, blank=True)
    email =  models.CharField(max_length=50, null=True, blank=True)
    titulo3 =  models.CharField(max_length=200, null=True, blank=True)
    telefono =  models.CharField(max_length=50, null=True, blank=True)
    icono1 = models.CharField(max_length=20, null=True, blank=True)
    link1 = models.URLField(max_length=200, null=True, blank=True)
    icono2 = models.CharField(max_length=20, null=True, blank=True)
    link2 = models.URLField(max_length=200, null=True, blank=True)
    icono3 = models.CharField(max_length=20, null=True, blank=True)
    link3 = models.URLField(max_length=200, null=True, blank=True)
    icono4 = models.CharField(max_length=20, null=True, blank=True)
    link4 = models.URLField(max_length=200, null=True, blank=True)

    class Meta:
        verbose_name_plural = "footer"
   
    def __str__(self):
        return self.titulo
