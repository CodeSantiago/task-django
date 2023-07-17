from django.urls import path
from . import views


urlpatterns = [
    path('', views.home),
    path('register_task/', views.register_task),

    path('delete_task/<task>', views.delete_task),
  




]