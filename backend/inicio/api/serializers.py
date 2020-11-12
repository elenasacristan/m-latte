from ..models import Inicio, QueHacemos, QueQueremos
from rest_framework import serializers

class InicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inicio
        fields = '__all__'

class QueHacemosSerializer(serializers.ModelSerializer):
    class Meta:
        model = QueHacemos
        fields = '__all__'

class QueQueremosSerializer(serializers.ModelSerializer):
    class Meta:
        model = QueQueremos
        fields = '__all__'