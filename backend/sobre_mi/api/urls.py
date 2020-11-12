from .views import SobreMiViewSet, DiscoViewSet
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'sobremi', SobreMiViewSet)
router.register(r'disco', DiscoViewSet)

urlpatterns = [
    path('', include(router.urls))
]