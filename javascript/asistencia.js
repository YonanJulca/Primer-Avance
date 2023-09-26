document.addEventListener('DOMContentLoaded', function() {
    // Cargar el archivo JSON
    fetch('../json/asistencia.json')
      .then(response => response.json())
      .then(data => {
        // Manipular los datos
        const tablaAsistencia = document.getElementById('tabla-asistencia').getElementsByTagName('tbody')[0];
  
        data.forEach(asistencia => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${asistencia.numero}</td>
            <td>${asistencia.fecha}</td>
            <td>${asistencia.entrada}</td>
            <td>${asistencia.salida}</td>
            <td><span style="color: #0ab030; font-weight: 500">${asistencia.estado}</span></td>
          `;
          tablaAsistencia.appendChild(fila);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  