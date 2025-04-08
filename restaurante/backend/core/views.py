from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework import viewsets
from .models import Plato
from django.shortcuts import render
from .serializers import PlatoSerializer

def home(request):
    return render(request, 'core/home.html')  # Ruta de la plantilla
class PlatoViewSet(viewsets.ModelViewSet):
    queryset = Plato.objects.all()
    serializer_class = PlatoSerializer

