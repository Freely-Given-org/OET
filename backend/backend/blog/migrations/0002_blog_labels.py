# Generated by Django 4.0.1 on 2022-01-31 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='labels',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
