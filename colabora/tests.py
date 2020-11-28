from django.test import TestCase
from .models import Colabora

class TestColaboraModel(TestCase):
    
    def test_can_create_colabora_with_all_the_fields(self):
        
        colabora = Colabora(
            titulo = 'Colabora',
            texto1 = 'TEXTO 1',
            texto2 = 'TEXTO 2',
            palabra_link = 'aqui',
            texto3 = 'TEXTO 3',
            link_pago = 'https://www.google.com/'
        )
        self.assertEqual(colabora.titulo, 'Colabora')
        self.assertEqual(colabora.texto1, 'TEXTO 1') 
        self.assertEqual(colabora.texto2, 'TEXTO 2') 
        self.assertEqual(colabora.palabra_link, 'aqui')
        self.assertEqual(colabora.texto3, 'TEXTO 3')    
        self.assertEqual(colabora.link_pago, 'https://www.google.com/') 
