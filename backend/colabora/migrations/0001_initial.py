# Generated by Django 3.1.2 on 2020-11-13 20:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Colabora',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(blank=True, max_length=100, null=True)),
                ('texto1', models.TextField(blank=True, null=True)),
                ('n_cuenta', models.CharField(blank=True, max_length=100, null=True)),
                ('texto2', models.TextField(blank=True, null=True)),
                ('palabra_link', models.CharField(blank=True, max_length=100, null=True)),
                ('texto3', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name_plural': 'Colabora',
            },
        ),
    ]
