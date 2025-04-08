from django.contrib import admin
from django.urls import path, include
from core.views import home  # <- importa la vista

urlpatterns = [
    path('', home),  # <- ahora la raíz mostrará algo
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
]





