from django.contrib import admin 
from .models import TipoActividad, Actividad

class ActividadAdmin(admin.ModelAdmin):
    list_filter = ('tipo_actividad',)
    ordering = ('tipo_actividad', 'id')


admin.site.register(TipoActividad)
admin.site.register(Actividad, ActividadAdmin)