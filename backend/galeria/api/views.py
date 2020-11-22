from rest_framework import viewsets
from .serializers import VideoSerializer, FotoSerializer
from ..models import Video, Foto

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all().order_by('id')
    serializer_class = VideoSerializer

class FotoViewSet(viewsets.ModelViewSet):
    queryset = Foto.objects.all().order_by('year')
    serializer_class = FotoSerializer