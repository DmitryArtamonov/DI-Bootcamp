# Generated by Django 4.2.1 on 2023-05-31 14:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('TO_DO_web', '0003_todo_task_category_todo_task_date_completion_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo_task',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='TO_DO_web.category'),
        ),
    ]
