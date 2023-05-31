from django import forms
from .models import Category, Todo_task


class AddTodoForm(forms.ModelForm):
    class Meta:
        model = Todo_task
        fields = '__all__'