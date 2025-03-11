function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function showSection(id) {
    const sections = document.querySelectorAll('.seccion');
    sections.forEach(section => section.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');

    // Ocultar el menú después de seleccionar una opción
    document.getElementById('menu').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inicio').classList.add('activa');
});

function toggleInfo(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('mostrar')) {
        element.classList.remove('mostrar');
    } else {
        // Cerrar cualquier otro detalle abierto
        document.querySelectorAll('.info-experiencia.mostrar').forEach(info => {
            info.classList.remove('mostrar');
        });
        element.classList.add('mostrar');
    }
}

document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
    this.reset();
});
