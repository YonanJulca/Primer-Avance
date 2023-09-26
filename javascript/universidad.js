// Función para mostrar la página de asistencia
function mostrarAsistencia() {
    document.querySelector('#content > section').style.display = 'none';
    document.getElementById('asistencia-page').style.display = 'block';
}

// Función para mostrar la página de horario de clases
function mostrarHorario() {
    document.querySelector('#content > section').style.display = 'none';
    document.getElementById('horario-page').style.display = 'block';
}

// Función para mostrar la página de información del practicante
function mostrarInformacion() {
    document.querySelector('#content > section').style.display = 'none';
    document.getElementById('informacion-page').style.display = 'block';
}

// Función para mostrar la sección principal y ocultar las páginas específicas
function mostrarSeccionPrincipal() {
    document.querySelector('#content > section').style.display = 'block';
    document.getElementById('asistencia-page').style.display = 'none';
    document.getElementById('horario-page').style.display = 'none';
    document.getElementById('informacion-page').style.display = 'none';
}

// Función para alternar la visibilidad de la barra lateral
function sidebarToggle(){
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
    }
}