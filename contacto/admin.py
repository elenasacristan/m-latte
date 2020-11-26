from django.contrib import admin
from .models import Contacto,IntroContacto

class ContactoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email','fecha')
    search_fields = ('email',)
    ordering = ('-fecha',)

admin.site.register(Contacto, ContactoAdmin)
admin.site.register(IntroContacto)