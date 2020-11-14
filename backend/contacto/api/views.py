from rest_framework import viewsets
from .serializers import ContactoSerializer
from ..models import Contacto

class ContactoViewSet(viewsets.ModelViewSet):
    queryset = Contacto.objects.all().order_by('-fecha')
    serializer_class = ContactoSerializer
