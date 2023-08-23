from django.urls import path
from .views import InfoApi

urlpatterns = [
    path('info/', InfoApi.as_view()),
]
