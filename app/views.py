from django.shortcuts import render
from django.shortcuts import get_object_or_404

from rest_framework import serializers
from .models import Information
import turtle


class InfoPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = '__all__'


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

class InfoApi(APIView):
    # parser_classes = (MultiPartParser, FormParser)

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

    def put(self , request,pk):
        info = get_object_or_404(Information ,pk=pk)
        serializer = InfoPostSerializer(info,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk, format=None):
        info = get_object_or_404(Information ,pk=pk)
        info.delete()
        return Response(status=200)

    


