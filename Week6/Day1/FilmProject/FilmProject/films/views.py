from django.shortcuts import render
from django.views import generic
from .models import Film, Director
from .forms import FilmForm, DirectorForm, ReviewForm
from django.urls import reverse_lazy
from django.contrib import messages
from django.contrib.auth.mixins import UserPassesTestMixin

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

class FilmDeleteView(UserPassesTestMixin, generic.DeleteView):
    model = Film
    template_name = 'film/confirm_delete.html'
    success_url = reverse_lazy('homepage_url')

    def test_func(self):
        return self.request.user.is_superuser

    def delete(self, request, *args, **kwargs):
        response = super().delete(request, *args, **kwargs)
        messages.success(request, 'Film successfully deleted.')
        return response

    def get_success_url(self):
        success_url = super().get_success_url()
        messages.success(self.request, 'Film successfully deleted.')
        return success_url

# class FavouriteFilmView(generic.ListView):
#
#     def post(self, request, *args, **kwargs):
#         film_id = kwargs.get('film_id')
#         film = Film(film_id)
#         user = request.user
#         if film in user.favourite_films:
#             user.favourite_films.remove(film)
#         else:
#             user.favourite_films.add(film)
