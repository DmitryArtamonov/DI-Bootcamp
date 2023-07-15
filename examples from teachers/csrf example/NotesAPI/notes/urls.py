# notes/urls.py
from django.urls import path
from .views import NoteList, index

urlpatterns = [
    path('', index, name="index"),
    path('api/notes/', NoteList.as_view(), name="note-list"),
]
