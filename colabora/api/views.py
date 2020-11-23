from rest_framework import viewsets
from .serializers import ColaboraSerializer
from ..models import Colabora

class ColaboraViewSet(viewsets.ModelViewSet):
    queryset = Colabora.objects.all()
    serializer_class = ColaboraSerializer
