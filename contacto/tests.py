from django.test import TestCase
from .models import IntroContacto

class TestContacto(TestCase):
    
    def test_can_create_contacto_with_all_the_fields(self):
        
        contacto = IntroContacto(
            titulo = 'Contacto',
            texto = 'TEXTO',
            text_bold = 'TEXTO2',
        )
        self.assertEqual(contacto.titulo, 'Contacto')
        self.assertEqual(contacto.texto, 'TEXTO') 
        self.assertEqual(contacto.text_bold, 'TEXTO2') 
    
