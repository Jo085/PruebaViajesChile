// Smooth scroll aplicado a la barra de navegación con links a las secciones: Presentación, Destacados y Formulario de contacto
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Carousel: Se reproduce automáticamente al cargar, y el ciclo se pausa/continua al  poner/quitar el cursor sobre la imagen.
// Para el desplazamiento de izq. y dcha. reacciona al teclado y a dispositivos de pantalla táctil
const myCarouselElement = document.querySelector("#carousel");
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: true,
  keyboard: true,
  ride: "carousel",
  pause: "hover",
});

// Tooltip aplicado en el botón "Enviar" del formulario de contacto- version Bootstrap 5.3 JS
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
