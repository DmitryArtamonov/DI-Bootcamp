from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from .forms import SignupForm
from django.contrib.auth.models import User

class SignupView(CreateView):
    form_class = SignupForm
    model = User
    template_name = "accounts/signup.html"
    success_url = reverse_lazy('login')

class ProfileView(CreateView):
    model = User
    fields = ['username', 'first_name', 'last_name',]
    template_name = "accounts/profile.html"