let registros = [];

function añadirRegistro() {
    let datosPersonales = document.getElementById("datosPersonalesForm").elements;
    let lugarNacimiento = document.getElementById("lugarNacimientoForm").elements;

    let registro = {
        "sexo": datosPersonales["sexo"].value,
        "fechaNacimiento": datosPersonales["fechaNacimiento"].value,
        "dni": datosPersonales["dni"].value,
        "telefonoFijo": datosPersonales["telefonoFijo"].value,
        "celular": datosPersonales["celular"].value,
        "ruc": datosPersonales["ruc"].value,
        "libMilitar": datosPersonales["libMilitar"].value,
        "brevete": datosPersonales["brevete"].value,
        "categoriaBrevete": datosPersonales["categoriaBrevete"].value,
        "tieneVehiculo": datosPersonales["tieneVehiculo"].checked,
        "modelo": datosPersonales["modelo"].value,
        "placa": datosPersonales["placa"].value,
        "anio": datosPersonales["anio"].value,
        "color": datosPersonales["color"].value,
        "estadoCivil": datosPersonales["estadoCivil"].value,
        "fechaMatrimonio": datosPersonales["fechaMatrimonio"].value,
        "grupoSanguineo": datosPersonales["grupoSanguineo"].value,
        "email": datosPersonales["email"].value,
        "pais": lugarNacimiento["pais"].value,
        "departamento": lugarNacimiento["departamento"].value,
        "provincia": lugarNacimiento["provincia"].value,
        "distrito": lugarNacimiento["distrito"].value,
    };

    registros.push(registro);
    mostrarRegistros();
}

function mostrarRegistros() {
    let registrosDiv = document.getElementById("registros");
    registrosDiv.innerHTML = "";

    for (let i = 0; i < registros.length; i++) {
        let registro = registros[i];

        let registroHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Registro ${i + 1}</h5>
                    <p class="card-text">Sexo: ${registro.sexo}</p>
                    <p class="card-text">Fecha de Nacimiento: ${registro.fechaNacimiento}</p>
                    <p class="card-text">DNI: ${registro.dni}</p>
                    <p class="card-text">Teléfono Fijo: ${registro.telefonoFijo}</p>
                    <p class="card-text">Celular: ${registro.celular}</p>
                    <p class="card-text">RUC: ${registro.ruc}</p>
                    <p class="card-text">Libreta Militar: ${registro.libMilitar}</p>
                    <p classclass="card-text">Brevete: ${registro.brevete}</p>
                    <p class="card-text">Categoría de Brevete: ${registro.categoriaBrevete}</p>
                    <p class="card-text">¿Cuenta con vehículo?: ${registro.tieneVehiculo ? 'Sí' : 'No'}</p>
                    <p class="card-text">Modelo: ${registro.modelo}</p>
                    <p class="card-text">Placa: ${registro.placa}</p>
                    <p class="card-text">Año: ${registro.anio}</p>
                    <p class="card-text">Color: ${registro.color}</p>
                    <p class="card-text">Estado Civil: ${registro.estadoCivil}</p>
                    <p class="card-text">Fecha de Matrimonio: ${registro.fechaMatrimonio}</p>
                    <p class="card-text">Grupo Sanguíneo: ${registro.grupoSanguineo}</p>
                    <p class="card-text">Email: ${registro.email}</p>
                    <p class="card-text">País: ${registro.pais}</p>
                    <p class="card-text">Departamento: ${registro.departamento}</p>
                    <p class="card-text">Provincia: ${registro.provincia}</p>
                    <p class="card-text">Distrito: ${registro.distrito}</p>
                </div>
            </div>
        `;

        registrosDiv.innerHTML += registroHTML;
    }
}

// Esta función cargará los datos desde el JSON y los almacenará en la variable 'registros'
function cargarDatosDesdeJSON() {
    fetch('../json/informacion.json')  // Cambia 'data.json' por la ruta correcta a tu archivo JSON
        .then(response => response.json())
        .then(data => {
            registros = data;
            mostrarRegistros();
        });
}

// Llama a la función para cargar los datos al cargar la página
cargarDatosDesdeJSON();

