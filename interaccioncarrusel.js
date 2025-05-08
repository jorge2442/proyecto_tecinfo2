let index = 0;
const imagenes = document.querySelectorAll('.carrusel img');
const totalImagenes = imagenes.length;

function moverCarrusel(direccion) {
  index += direccion;

  if (index >= totalImagenes) {
    index = 0; // Vuelve al principio si llega al final
  } else if (index < 0) {
    index = totalImagenes - 1; // Vuelve al final si se desplaza antes del principio
  }

  const carrusel = document.querySelector('.carrusel');
  const anchoImagen = imagenes[0].clientWidth;
  carrusel.style.transform = `translateX(-${index * anchoImagen}px)`;
}
