from django.urls import path
from .views import (
    InfoApi,
    InfoDetail,
    EventApi,
    EventDetail,
    GalleryApi,
    GalleyDetail,
    SlideApi,
    SlideDetail,  # Typo: It should be GalleryDetail
    NotificationsApi,
    NotificationsDetail,
    InfoSiteApi,
    InfoSiteDetail,  # Duplicate import, already imported at the beginning
    CalendarManagementApi,
    CalendarManagementDetail
)

urlpatterns = [
    path('info/', InfoApi.as_view()),
    path('info/<int:pk>/', InfoDetail.as_view()),

    path('event/', EventApi.as_view()),
    path('event/<int:pk>/', EventDetail.as_view()),

    path('gallery/', GalleryApi.as_view()),
    path('gallery/<int:pk>/', GalleyDetail.as_view()),

    path('slide/', SlideApi.as_view()),
    path('slide/<int:pk>/', SlideDetail.as_view()),

    path('notifications/', NotificationsApi.as_view()),
    path('notifications/<int:pk>/', NotificationsDetail.as_view()),

    path('info_site/', InfoSiteApi.as_view()),
    path('info_site/<int:pk>/', InfoSiteDetail.as_view()),

    path('calendar_management/', CalendarManagementApi.as_view()),
    path('calendar_management/<int:pk>/', CalendarManagementDetail.as_view()),

]
