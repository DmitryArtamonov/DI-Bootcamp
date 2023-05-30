from django.shortcuts import render
from .models import Phonenumbers

def name(request, name):
    context = {'user': Phonenumbers.objects.filter(name=name).first()}
    return render(request, 'name.html', context)

def number(request, number):
    context = {'user': Phonenumbers.objects.filter(number=number).first()}
    return render(request, 'name.html', context)


# Create your views here.
