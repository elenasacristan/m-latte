from rest_framework import viewsets
from .serializers import VideoSerializer, FotoSerializer
from ..models import Video, Foto

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class FotoViewSet(viewsets.ModelViewSet):
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer