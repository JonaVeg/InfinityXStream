function mandarMensaje() {
    console.log('La función mandarMensaje() se está ejecutando correctamente.');
  
    // Resto del código...
    var numeroTelefono = '522225402887';
    var mensaje = encodeURIComponent('Hola, estoy interesado en cotizar. ¿Cómo puedo empezar?');
    var urlWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + mensaje;
    window.location.href = urlWhatsApp;
  }
  