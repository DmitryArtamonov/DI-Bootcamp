from django.db import models
from datetime import date

class Country(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Director(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Film(models.Model):
    title = models.CharField(max_length=200)
    release_date = models.DateField(default=date.today)
    created_in_country = models.ForeignKey(Country, related_name='films', on_delete=models.SET_NULL, null=True)
    available_in_countries = models.ManyToManyField(Country, blank=True, null=True)
    category = models.ManyToManyField(Category, blank=True, null=True)
    director = models.ManyToManyField(Director, blank=True, null=True)

    def __str__(self):
        return self.title

