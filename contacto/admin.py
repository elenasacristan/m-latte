from django.contrib import admin
from .models import Contacto

class ContactoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'email','fecha')
    search_fields = ('email',)
    ordering = ('fecha', 'email')

admin.site.register(Contacto, ContactoAdmin)
