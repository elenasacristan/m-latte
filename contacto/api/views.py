from rest_framework import viewsets
from .serializers import ContactoSerializer, IntroContactoSerializer
from ..models import Contacto, IntroContacto
from rest_framework.permissions import AllowAny

class ContactoViewSet(viewsets.ModelViewSet):
    '''
    We will allow anyone to do post request but they won't be able to see 
    other emails becase I'm only allowing the post method
    '''
    permission_classes = [AllowAny]
    http_method_names = ['post']
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer

class IntroContactoViewSet(viewsets.ModelViewSet):
    '''
    We will allow anyone to do post request but they won't be able to see 
    other emails becase I'm only allowing the post method
    '''
    queryset = IntroContacto.objects.all()
    serializer_class = IntroContactoSerializer
