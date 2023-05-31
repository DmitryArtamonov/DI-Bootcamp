from django.shortcuts import render
from .models import Todo_task
from .forms import AddTodoForm

def add_todo(request):
    if request.method == 'POST':
        data = request.POST
        filled_form = AddTodoForm(data)
        filled_form.save()

    context = {'form': AddTodoForm()}
    return render(request, 'add_todo.html', context)

def display_todos(request):

    context = {'todo_tasks': Todo_task.objects.all()}
    return render(request, 'all_tasks.html', context)
