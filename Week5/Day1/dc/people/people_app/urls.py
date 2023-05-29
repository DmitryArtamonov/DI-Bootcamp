from django.urls import path
from . import views

urlpatterns = [
    path('people/', views.people),
    path('people/<id>', views.person)
    ]