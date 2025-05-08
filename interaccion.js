const imagenes = document.querySelectorAll('.galeria img');

imagenes.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)';
    img.style.boxShadow = '0 0 20px #ff4d4d';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    img.style.boxShadow = 'none';
  });
});
