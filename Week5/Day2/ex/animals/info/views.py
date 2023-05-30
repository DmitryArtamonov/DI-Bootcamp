from django.shortcuts import render
from .models import Animal, Family

def family(request, family_id):

    context = {'animals': Animal.objects.filter(family=family_id)}
    return render(request, "family.html", context)

def animal(request, animal_id):
    context = {'animal': Animal.objects.filter(id=animal_id).first()}
    return render(request, "animal.html", context)


def animals(request):
    context = {'animals': Animal.objects.all()}
    return render(request, "animals.html", context)


