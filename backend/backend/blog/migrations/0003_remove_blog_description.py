# Generated by Django 4.0.1 on 2022-01-31 02:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_blog_labels'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='description',
        ),
    ]
