from ..models import TipoActividad, Actividad
from rest_framework import serializers


class ActividadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Actividad
        fields = ['id', 'foto', 'titulo', 
        'text_boton', 'descripcion','logo_name', 'titulo2',
         'destinatarios',  'titulo3', 'autor', 'tipo_actividad', 'titulo4', 'icono', 'duracion']


class TipoActividadSerializer(serializers.ModelSerializer):  

    actividades =  ActividadSerializer(many=True, read_only=True)
    
    class Meta:
        model = TipoActividad
        fields = ['id', 'nombre', 'actividades']

