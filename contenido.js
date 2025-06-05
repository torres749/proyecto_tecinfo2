function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.contenido-seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('activo');
    });

    const seleccionada = document.getElementById(id);
    if (seleccionada) {
        seleccionada.classList.add('activo');
    }
}
