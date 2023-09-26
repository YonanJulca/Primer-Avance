document.addEventListener('DOMContentLoaded', function() {
  fetch('../json/horario.json')
      .then(response => response.json())
      .then(data => {
          const table = document.querySelector('.table tbody');

          // Definir el horario en un array
          const horario = [
              '07:08', '08:09', '09:10', '10:11', '11:12', '12:13', '13:14', '14:15', '15:16', '16:17', '17:18', '18:19', '19:20', '20:21', '21:22', '22:23'
          ];

          // Iterar sobre las horas
          horario.forEach(hora => {
              const row = document.createElement('tr');
              const horaCell = document.createElement('th');
              horaCell.textContent = hora;
              row.appendChild(horaCell);

              // Iterar sobre los días
              ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].forEach(day => {
                  const cell = document.createElement('td');
                  const clase = data[day][hora] || '';
                  cell.contentEditable = true;
                  cell.textContent = clase;
                  row.appendChild(cell);
              });

              table.appendChild(row);
          });
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
