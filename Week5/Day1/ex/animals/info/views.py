from django.shortcuts import render
import json

def get_data ():

    with open('info/animals_dict.json', mode='r', encoding='UTF-8') as animals_file:
        animal_data = json.load(animals_file)

    families = animal_data['families']
    animals = animal_data['animals']

    return(families, animals)


def family(request, family_id):

    families, animals = get_data()

    family_name = list(filter(lambda x: x['id'] == int(family_id), families))[0]['name']
    animals_in_family = list(filter(lambda x: x['family'] == int(family_id), animals))
    context = {'family_name': family_name, 'animals': animals_in_family}

    return render(request, "family.html", context)


def animal(request, animal_id):

    animals = get_data()[1]
    animal = list(filter(lambda x: x['id'] == int(animal_id), animals))[0]
    context = {'animal': animal}

    return render(request, "animal.html", context)


