from django.db import models
from django.contrib.auth.models import AbstractBaseUser, AbstractUser
from films.models import Film


# just for excercise, customUser is not used in apps
class CustomUser(AbstractBaseUser):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, unique=True)
    love_cats = models.BooleanField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    # favourite_films = models.ManyToManyField(Film, blank=True)
    USERNAME_FIELD = 'last_name'
    REQUIRED_FIELDS = ['first_name','love_cats']

# class CustomUser2 (AbstractUser):
#     first_name = models.CharField(max_length=50)
#     # favourite_films = models.ManyToManyField(Film, blank=True)
