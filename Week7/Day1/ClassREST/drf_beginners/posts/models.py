from django.db import models

# Create your models here.

CATEGORY_CHOICES = (
    ('Dj', 'Django'),
    ('Js', 'Javascript'),
    ('C', 'C')
)

class Post(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=3, choices=CATEGORY_CHOICES)
    published_date = models.DateTimeField
    last_update =

    def __str__(self):
        return self.title