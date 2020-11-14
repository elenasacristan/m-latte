from .views import FooterViewSet
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'footer', FooterViewSet)

urlpatterns = [
    path('', include(router.urls))
]