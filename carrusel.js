let indice = 0;

function cambiarImagen(direccion) {
    const slide = document.querySelector('.carousel-slide');
    const total = document.querySelectorAll('.carousel-img').length;

    indice += direccion;

    if (indice < 0) indice = total - 1;
    if (indice >= total) indice = 0;

    slide.style.transform = `translateX(-${indice * 100}%)`;
}
