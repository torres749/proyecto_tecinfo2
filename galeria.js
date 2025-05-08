// Función para mostrar la imagen ampliada en un modal
function mostrarImagen(imagenSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    
    modal.style.display = "flex";
    modalImg.src = imagenSrc;
}

// Función para cerrar el modal cuando se hace clic en él
function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
