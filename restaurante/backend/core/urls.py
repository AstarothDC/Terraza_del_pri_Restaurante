from django.urls import path
from django.views.generic import TemplateView
from core.views import FrontendAppView

urlpatterns = [
    path('', FrontendAppView.as_view(), name='home'),
]




