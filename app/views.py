from django.shortcuts import render

# Create your views here.


from rest_framework import serializers
from .models import Information

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
        infoes = Information.objects.all()
        serializer = InfoPostSerializer(infoes, many=True)
        return Response(serializer.data)