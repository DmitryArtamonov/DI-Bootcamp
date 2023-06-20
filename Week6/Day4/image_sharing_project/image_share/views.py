from django.shortcuts import render
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic import CreateView


class CustomLoginView(LoginView):
    template_name = 'registration/login.html'


class RegistrationView(CreateView):
    form_class = UserCreationForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('login')
