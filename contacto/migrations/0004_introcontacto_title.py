# Generated by Django 2.2.16 on 2020-11-26 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacto', '0003_introcontacto'),
    ]

    operations = [
        migrations.AddField(
            model_name='introcontacto',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
