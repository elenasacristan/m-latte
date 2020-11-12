from .views import InicioViewSet, QueHacemosViewSet, QueQueremosViewSet
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'inicio', InicioViewSet)
router.register(r'queHacemos', QueHacemosViewSet)
router.register(r'queQueremos', QueQueremosViewSet)

urlpatterns = [
    path('', include(router.urls))
]