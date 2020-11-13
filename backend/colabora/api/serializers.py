from ..models import Colabora
from rest_framework import serializers


class ColaboraSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Colabora
        fields = '__all__'





