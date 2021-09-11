from django.db import models


class AppModel(models.Model):
    title = models.TextField(max_length=200)
    body = models.TextField(max_length=300)
