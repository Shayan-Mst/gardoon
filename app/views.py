from django.shortcuts import render
from django.shortcuts import get_object_or_404

from rest_framework import serializers
from .models import Information ,Event, Gallery,Slide , Notifications, InfoSite, CalendarManagement

from rest_framework.views import APIView
from rest_framework.response import Response


#-----------------------InformationsApi-----------------------


class InfoPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = '__all__'
        extra_kwargs = {
            'title': {'required': False},
            'description': {'required': False},
            'category': {'required': False},
        }

class InfoApi(APIView):

    def post(self, request, *args, **kwargs):
        serializer = InfoPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def get(self, request, *args, **kwargs):
        infoes = Information.objects.order_by('-created')
        serializer = InfoPostSerializer(infoes, many=True)
        return Response(serializer.data)

class InfoDetail(APIView):
    def get(self, request,pk):
        info = get_object_or_404(Information ,pk=pk)
        serializer = InfoPostSerializer(info)
        return Response(serializer.data)

    def put(self , request, pk):
        info = get_object_or_404(Information ,pk=pk)
        serializer = InfoPostSerializer(info,data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        info = get_object_or_404(Information ,pk=pk)
        info.delete()
        return Response(status=200)

    


#-----------------------EventApi-----------------------




class EventPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        extra_kwargs = {
            'title': {'required': False},
            'description': {'required': False},
            'category': {'required': False},
        }

class EventApi(APIView):

    def post(self, request, *args, **kwargs):
        serializer = EventPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def get(self, request, *args, **kwargs):
        events = Event.objects.order_by('-created')
        serializer = EventPostSerializer(events, many=True)
        return Response(serializer.data)

class EventDetail(APIView):
    def get(self, request,pk):
        event = get_object_or_404(Event ,pk=pk)
        serializer = EventPostSerializer(event)
        return Response(serializer.data)

    def put(self , request, pk):
        event = get_object_or_404(Event ,pk=pk)
        serializer = EventPostSerializer(event,data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        event = get_object_or_404(Event ,pk=pk)
        event.delete()
        return Response(status=200)

    


#-----------------------GalleyApi-----------------------




class GalleryPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'
        extra_kwargs = {
            'title': {'required': False},
        }

class GalleryApi(APIView):

    def post(self, request, *args, **kwargs):
        serializer = GalleryPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def get(self, request, *args, **kwargs):
        gallery = Gallery.objects.order_by('-created')
        serializer = GalleryPostSerializer(gallery, many=True)
        return Response(serializer.data)

class GalleyDetail(APIView):
    def get(self, request,pk):
        gallery = get_object_or_404(Gallery ,pk=pk)
        serializer = GalleryPostSerializer(gallery)
        return Response(serializer.data)

    def put(self , request, pk):
        gallery = get_object_or_404(Gallery ,pk=pk)
        serializer = GalleryPostSerializer(gallery,data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        gallery = get_object_or_404(Gallery ,pk=pk)
        gallery.delete()
        return Response(status=200)



#-----------------------SlideApi-----------------------


class SlidePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slide
        fields = '__all__'
        extra_kwargs = {
            'title': {'required': False},
        }

class SlideApi(APIView):

    def post(self, request, *args, **kwargs):
        serializer = SlidePostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def get(self, request, *args, **kwargs):
        slide = Slide.objects.order_by('-created')
        serializer = SlidePostSerializer(slide, many=True)
        return Response(serializer.data)

class SlideDetail(APIView):
    def get(self, request,pk):
        slide = get_object_or_404(Slide ,pk=pk)
        serializer = SlidePostSerializer(slide)
        return Response(serializer.data)

    def put(self , request, pk):
        slide = get_object_or_404(Slide ,pk=pk)
        serializer = SlidePostSerializer(slide,data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        slide = get_object_or_404(Slide ,pk=pk)
        slide.delete()
        return Response(status=200)





#-----------------------NotificationsApi-----------------------


class NotificationsPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notifications
        fields = '__all__'
        extra_kwargs = {
            'title': {'required': False},
        }

class NotificationsApi(APIView):

    def post(self, request, *args, **kwargs):
        serializer = NotificationsPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def get(self, request, *args, **kwargs):
        notifications = Notifications.objects.order_by('-created')
        serializer = NotificationsPostSerializer(notifications, many=True)
        return Response(serializer.data)

class NotificationsDetail(APIView):
    def get(self, request,pk):
        notifications = get_object_or_404(Notifications ,pk=pk)
        serializer = NotificationsPostSerializer(notifications)
        return Response(serializer.data)

    def put(self , request, pk):
        notifications = get_object_or_404(Notifications ,pk=pk)
        serializer = NotificationsPostSerializer(notifications,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        notifications = get_object_or_404(Notifications ,pk=pk)
        notifications.delete()
        return Response(status=200)


#-----------------------InfoSiteApi-----------------------


class InfoSitePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfoSite
        fields = '__all__'
        extra_kwargs = {
            'description': {'required': False},
            'phone_number': {'required': False},
            'email': {'required': False},
            'address': {'required': False},
        }

class InfoSiteApi(APIView):
    # has_posted = False  # Class-level variable to track whether the post method has been called
    # def post(self, request, *args, **kwargs):
    #     if self.has_posted:
    #         return Response({'error': 'Already posted'}, status=400)

    #     serializer = InfoSitePostSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         self.has_posted = True  # Set the flag to True after successfully saving
    #         return Response(serializer.data, status=201)
    #     else:
    #         return Response(serializer.errors, status=400)
            

    def get(self, request, *args, **kwargs):
        info_site = InfoSite.objects.get_or_create(pk=1)
        serializer = InfoSitePostSerializer(info_site, many=True)
        return Response(serializer.data)

class InfoSiteDetail(APIView):
    def get(self, request,pk):
        info_site = get_object_or_404(InfoSite ,pk=pk)
        serializer = InfoSitePostSerializer(info_site)
        return Response(serializer.data)

    def put(self , request, pk):
        info_site = get_object_or_404(InfoSite ,pk=pk)
        serializer = InfoSitePostSerializer(info_site,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        info_site = get_object_or_404(InfoSite ,pk=pk)
        info_site.delete()
        return Response(status=200)



#-----------------------CalendarManagementApi-----------------------


class CalendarManagementPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarManagement
        fields = '__all__'
        extra_kwargs = {
            'name1': {'required': False},
            'description1': {'required': False},
            'name2': {'required': False},
            'description2': {'required': False},
            'name3': {'required': False},
            'description3': {'required': False},
            'name4': {'required': False},
            'description4': {'required': False},
            'name5': {'required': False},
            'description5': {'required': False},
        }

class CalendarManagementApi(APIView):
    def get(self, request, *args, **kwargs):
        calendar_management = CalendarManagement.objects.get_or_create(pk=1)
        serializer = CalendarManagementPostSerializer(calendar_management, many=True)
        return Response(serializer.data)

class CalendarManagementDetail(APIView):
    def get(self, request,pk):
        calendar_management = get_object_or_404(CalendarManagement ,pk=pk)
        serializer = CalendarManagementPostSerializer(calendar_management)
        return Response(serializer.data)

    def put(self , request, pk):
        calendar_management = get_object_or_404(CalendarManagement ,pk=pk)
        serializer = CalendarManagementPostSerializer(calendar_management,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        calendar_management = get_object_or_404(CalendarManagement ,pk=pk)
        calendar_management.delete()
        return Response(status=200)