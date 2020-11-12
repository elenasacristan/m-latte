from rest_framework import viewsets
from .serializers import SobreMiSerializer, DiscoSerializer
from ..models import SobreMi, Disco

class SobreMiViewSet(viewsets.ModelViewSet):
    queryset = SobreMi.objects.all()
    serializer_class = SobreMiSerializer

class DiscoViewSet(viewsets.ModelViewSet):
    queryset = Disco.objects.all()
    serializer_class = DiscoSerializer