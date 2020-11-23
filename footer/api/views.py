from rest_framework import viewsets
from .serializers import FooterSerializer
from ..models import Footer

class FooterViewSet(viewsets.ModelViewSet):
    queryset = Footer.objects.all()
    serializer_class = FooterSerializer
