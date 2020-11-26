from .views import ContactoViewSet, IntroContactoViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'Contacto', ContactoViewSet)
router.register(r'IntoContacto', IntroContactoViewSet)

urlpatterns = [
    path('', include(router.urls))
]