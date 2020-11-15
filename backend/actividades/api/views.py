from rest_framework import viewsets
from .serializers import TipoActividadSerializer, ActividadSerializer
from ..models import TipoActividad, Actividad

class TipoActividadViewSet(viewsets.ModelViewSet):
    queryset = TipoActividad.objects.all()
    serializer_class = TipoActividadSerializer

class ActividadViewSet(viewsets.ModelViewSet):
    queryset = Actividad.objects.all().order_by('id')
    serializer_class = ActividadSerializer