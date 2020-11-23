from ..models import Video, Foto
from rest_framework import serializers


class VideoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Video
        fields = '__all__'


class FotoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Foto
        fields = '__all__'



