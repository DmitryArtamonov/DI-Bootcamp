# Generated by Django 4.2.1 on 2023-05-31 14:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('TO_DO_web', '0002_todo_task'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo_task',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='TO_DO_web.category'),
        ),
        migrations.AddField(
            model_name='todo_task',
            name='date_completion',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='todo_task',
            name='date_creation',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='todo_task',
            name='deadline_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='todo_task',
            name='details',
            field=models.TextField(default='aa'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='todo_task',
            name='has_been_done',
            field=models.BooleanField(default=False),
        ),
    ]
