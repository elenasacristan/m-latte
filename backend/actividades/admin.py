from django.contrib import admin 
from .models import TipoActividad, Actividad

class ActividadAdmin(admin.ModelAdmin):
    list_display = ('tipo_actividad', 'titulo')
    list_filter = ('tipo_actividad',)
    ordering = ('tipo_actividad', 'titulo')


admin.site.register(TipoActividad)
admin.site.register(Actividad, ActividadAdmin)