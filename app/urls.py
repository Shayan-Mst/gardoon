from django.urls import path
from .views import InfoApi ,InfoDetail

urlpatterns = [
    path('info/', InfoApi.as_view()),
    path('info/<int:pk>/', InfoDetail.as_view()),

]
