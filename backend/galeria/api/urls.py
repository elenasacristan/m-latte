from .views import VideoViewSet, FotoViewSet
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'Video', VideoViewSet)
router.register(r'Foto', FotoViewSet)

urlpatterns = [
    path('', include(router.urls))
]