from ..models import SobreMi, Disco
from rest_framework import serializers

class SobreMiSerializer(serializers.ModelSerializer):
    class Meta:
        model = SobreMi
        fields = '__all__'

class DiscoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disco
        fields = '__all__'

