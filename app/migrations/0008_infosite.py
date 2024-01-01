# Generated by Django 4.2.4 on 2024-01-01 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_notifications'),
    ]

    operations = [
        migrations.CreateModel(
            name='InfoSite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=399)),
                ('phone_number', models.CharField(blank=True, max_length=11)),
                ('email', models.EmailField(max_length=254)),
                ('address', models.CharField(blank=True, max_length=255)),
            ],
        ),
    ]