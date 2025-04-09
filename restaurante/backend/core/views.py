from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework import viewsets
from django.views.generic import TemplateView
from .models import Plato
from django.shortcuts import render
from .serializers import PlatoSerializer
import os
from django.conf import settings

#def home(request):
    #return render(request, 'core/home.html')  # Ruta de la plantilla
class PlatoViewSet(viewsets.ModelViewSet):
    queryset = Plato.objects.all()
    serializer_class = PlatoSerializer
class FrontendAppView(TemplateView):
    template_name = "index.html"
    def get_template_names(self):
        return [os.path.join(settings.BASE_DIR, 'frontend', 'build', 'index.html')]

