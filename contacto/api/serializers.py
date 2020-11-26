from ..models import Contacto, IntroContacto
from rest_framework import serializers

class ContactoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Contacto
        fields = '__all__'

class IntroContactoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = IntroContacto
        fields = '__all__'

