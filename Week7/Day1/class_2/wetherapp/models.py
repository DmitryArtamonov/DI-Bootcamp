from django.db import models

TYPE_CHOICES = (
    ('sunny', 'sunny'),
    ('cloudy', 'cloudy'),
    ('windy', 'windy'),
    ('rainy', 'rainy'),
    ('stormy', 'stormy')
)

class Report(models.Model):

    location = models.CharField(max_length=100)
    temperature = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES, blank=True, null=True)

