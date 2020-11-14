from .views import ContactoViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'Contacto', ContactoViewSet)

urlpatterns = [
    path('', include(router.urls))
]