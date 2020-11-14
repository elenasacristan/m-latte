from ..models import Footer
from rest_framework import serializers

class FooterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Footer
        fields = '__all__'
