from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/inicio/', include('inicio.api.urls')),
    path('api/sobremi/', include('sobre_mi.api.urls')),
    path('api/actividades/', include('actividades.api.urls')),
    path('api/galeria/', include('galeria.api.urls')),
    path('api/colabora/', include('colabora.api.urls')),
    path('api/footer/', include('footer.api.urls')),
    path('api/contacto/', include('contacto.api.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# this will handle any other routes (React-Router-Dom )
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]