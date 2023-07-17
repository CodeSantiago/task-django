from django.shortcuts import render, redirect
from .models import Task


# Create your views here.


def home(request):
    tasks = Task.objects.all()
    return render(request, 'gestion_tareas.html', {"task":tasks })

def register_task(request):
    task = request.POST['tasktxt']
    text = request.POST['texttxt']

    tarea = Task.objects.create(task = task, text = text)
    return redirect('/')



def delete_task(request, task):
    task = Task.objects.get(task=task)
    task.delete()
    return redirect ('/')






