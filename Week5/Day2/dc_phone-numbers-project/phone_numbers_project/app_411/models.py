from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Phonenumbers(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    number = PhoneNumberField()
    address = models.CharField(max_length=1000)

