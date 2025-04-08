from django.contrib import admin
from .models import Plato

@admin.register(Plato)
class PlatoAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'precio', 'descripcion']  # Asegúrate de que coincidan con los campos de tu modelo

