from django.shortcuts import render

def get_data():
    people = [
        {
            'id': 1,
            'name': 'Bob Smith',
            'age': 35,
            'country': 'USA'
        },
        {
            'id': 2,
            'name': 'Martha Smith',
            'age': 60,
            'country': 'USA'
        },
        {
            'id': 3,
            'name': 'Fabio Alberto',
            'age': 18,
            'country': 'Italy'
        },
        {
            'id': 4,
            'name': 'Dietrich Stein',
            'age': 85,
            'country': 'Germany'
        }
    ]
    return people


def people(request):
    people_data = get_data()
    context = {'people': sorted(people_data, key=lambda x: x['age'])}
    return render(request, 'people.html', context)

def person(request, id):
    people_data = get_data()
    context = {'person': list(filter(lambda x: x['id'] == int(id), people_data))[0]}
    return render(request, 'person.html', context)


# Create your views here.
