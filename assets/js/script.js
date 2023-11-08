var inputFechaHora = document.getElementById("meet");
var fechaActual = new Date();
fechaActual.setHours(fechaActual.getHours() + 19);
var fechaFormateada = fechaActual.toISOString().slice(0, 16);
inputFechaHora.min = fechaFormateada;

  document.getElementById("meetingForm").addEventListener("submit", function(event) {
    event.preventDefault();

      var nombre = document.getElementById("name").value.trim();
      var baby = document.getElementById("nameBaby").value.trim();
      var age = document.getElementById("age").value.trim();
      var select = document.getElementById("servicePack");
      var indiceSeleccionado = select.selectedIndex;
      var service = select.options[indiceSeleccionado].textContent;
      var inputDate =   document.getElementById("meet").value.trim();
      var dateObj = new Date(inputDate);
      var options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      var meet = dateObj.toLocaleString('es-ES', options);
    var mensaje = "Hola, me gustaría agendar una cita. Estos son mis datos:\n\nMi nombre es *" + nombre + "*\nEl nombre de mi bebé es *" + baby + "*\nSu edad está entre *" + age + " meses*\nHe decidido adquirir el servicio de *" + service + "*\nAsistiré el día *" + meet + "*\n\nSolicito por favor, me comparta información de pago para quedar registrado, muchas gracias.";
    var enlaceWhatsApp = "https://api.whatsapp.com/send?phone=+573154959099&text=" + encodeURIComponent(mensaje);
    
    window.open(enlaceWhatsApp, "_blank");
  });