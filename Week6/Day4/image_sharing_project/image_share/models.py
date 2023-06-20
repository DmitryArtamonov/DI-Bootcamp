from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Image(models.Model):
    image = models.ImageField()
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=200, null=True, blank=True)
    user = models.ForeignKey(User, related_name='images', on_delete=models.CASCADE)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    images_amount = models.IntegerField(null=True)





