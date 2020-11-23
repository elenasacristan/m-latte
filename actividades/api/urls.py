from .views import TipoActividadViewSet, ActividadViewSet
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'tipoActividad', TipoActividadViewSet)
router.register(r'Actividades', ActividadViewSet)

urlpatterns = [
    path('', include(router.urls))
]