from rest_framework import viewsets
from .serializers import InicioSerializer, QueHacemosSerializer, QueQueremosSerializer
from ..models import Inicio, QueHacemos, QueQueremos

class InicioViewSet(viewsets.ModelViewSet):
    queryset = Inicio.objects.all()
    serializer_class = InicioSerializer

class QueHacemosViewSet(viewsets.ModelViewSet):
    queryset = QueHacemos.objects.all()
    serializer_class = QueHacemosSerializer

class QueQueremosViewSet(viewsets.ModelViewSet):
    queryset = QueQueremos.objects.all()
    serializer_class = QueQueremosSerializer