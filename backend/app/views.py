from rest_framework import viewsets
from rest_framework import serializers
from .models import AppModel
from rest_framework.permissions import IsAuthenticated


class AppCreateSeializer(serializers.ModelSerializer):
    class Meta:
        fields = ['title', 'body']
        # fields = ['title', 'body']
        model = AppModel


class AppCreateView(viewsets.ModelViewSet):
    serializer_class = AppCreateSeializer
    permission_classes = (IsAuthenticated,)
    queryset = AppModel.objects.all()
