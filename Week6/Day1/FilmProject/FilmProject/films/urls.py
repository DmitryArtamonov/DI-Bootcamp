from django.urls import path
from . import views

urlpatterns = [
    path('homepage/', views.HomePageView.as_view(), name='homepage_url'),
    path('add_film/', views.FilmCreateView.as_view(), name='addFilm'),
    path('add_director/', views.DirectorCreateView.as_view(), name='addDirector'),
    path('add_review/', views.ReviewCreateView.as_view(), name='addReview'),
    path('delete_film/<int:pk>/', views.FilmDeleteView.as_view(), name='deleteFilm'),
    # path('favourite_film/<int:pk>/', views.FavouriteFilmView.as_view(), name='favFilm')
]

