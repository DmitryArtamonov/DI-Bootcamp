from django.shortcuts import render
from django.views import generic
from .models import Film, Director
from .forms import FilmForm, DirectorForm, ReviewForm
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

class ReviewCreateView(generic.CreateView):
    template_name = 'review/addReview.html'
    form_class = ReviewForm
    success_url = reverse_lazy('addReview')


