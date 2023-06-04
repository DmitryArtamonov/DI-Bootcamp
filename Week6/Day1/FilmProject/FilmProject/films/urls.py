from django.urls import path
from . import views

urlpatterns = [
    path('homepage/', views.HomePageView.as_view(), name='homepage_url'),
    path('add_film/', views.FilmCreateView.as_view(), name='addFilm'),
    path('add_director/', views.DirectorCreateView.as_view(), name='addDirector')

]