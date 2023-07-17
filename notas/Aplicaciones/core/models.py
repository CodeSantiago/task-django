from django.db import models

# Create your models here.


class Task(models.Model):
    task = models.CharField(max_length=30)
    text = models.CharField(max_length=250)
    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.task, self.text)