from django.shortcuts import render
from django.views import generic
from .models import Film, Director
from .forms import FilmForm, DirectorForm
from django.urls import reverse_lazy

class HomePageView(generic.ListView):
    model = Film
    template_name = 'homepage.html'

class FilmCreateView(generic.CreateView):
    template_name = 'film/addFilm.html'
    form_class = FilmForm
    success_url = reverse_lazy('addFilm')

class DirectorCreateView(generic.CreateView):
    template_name = 'director/addDirector.html'
    form_class = DirectorForm
    success_url = reverse_lazy('addDirector')


