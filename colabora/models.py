from django.db import models

class Colabora(models.Model):
    titulo =  models.CharField(max_length=100, null=True, blank=True)
    texto1 = models.TextField(null=True, blank=True)
    n_cuenta = models.CharField(max_length=100, null=True, blank=True)
    texto2 = models.TextField(null=True, blank=True)
    palabra_link = models.CharField(max_length=100, null=True, blank=True)
    texto3 = models.TextField(null=True, blank=True)
    link_pago = models.URLField(max_length=300,null=True, blank=True)

    class Meta:
        verbose_name_plural = "5. COLABORA"
   
    def __str__(self):
        return f'{self.titulo.upper()} - click para modificar'

