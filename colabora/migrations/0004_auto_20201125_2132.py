# Generated by Django 2.2.16 on 2020-11-25 21:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('colabora', '0003_colabora_link_payment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='colabora',
            old_name='link_payment',
            new_name='link_pago',
        ),
    ]