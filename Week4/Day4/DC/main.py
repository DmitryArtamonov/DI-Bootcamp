from random import choices
from connection import manage_connection
import requests

def api_get(url):
    res = requests.get(url).json()
    return res

def get10names():
    names_get = api_get('https://restcountries.com/v3.1/all?fields=name')
    names = []
    for name in names_get:
        names.append(name['name']['common'])
    return choices(names, k=10)

country_names = (get10names())
for country in country_names:
    data = api_get(f'https://restcountries.com/v3.1/name/{country}')[0]

    capital, subregion, flag, population = (
        data['capital'][0], data['subregion'], data['flag'], data['population'])

    query = f"""INSERT INTO countries (name, capital, flag_code, subregion, population)
     VALUES ('{country}', '{capital}', '{flag}', '{subregion}', {population})"""

    manage_connection(query)

