from .views import ColaboraViewSet
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'Colabora', ColaboraViewSet)

urlpatterns = [
    path('', include(router.urls))
]