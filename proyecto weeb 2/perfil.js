// Actualizar foto de perfil
document.getElementById('btnActualizarFoto').addEventListener('click', function() {
    const foto = document.getElementById('foto').files[0];
    if (foto) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('fotoPerfil').src = e.target.result;
        }
        reader.readAsDataURL(foto);
        alert("Foto actualizada.");
    } else {
        alert("Por favor, selecciona una foto.");
    }
});

// Actualizar correo electrónico
document.getElementById('btnActualizarCorreo').addEventListener('click', function() {
    const correo = document.getElementById('correo').value;
    if (correo) {
        alert("Correo actualizado a: " + correo);
        // Aquí iría la lógica para enviar el nuevo correo al servidor.
    } else {
        alert("Por favor, ingresa un correo válido.");
    }
});

// Actualizar especialización
document.getElementById('btnActualizarEspecializacion').addEventListener('click', function() {
    const especializacion = document.getElementById('especializacion').value;
    if (especializacion) {
        document.getElementById('especializacionVista').textContent = especializacion;
        alert("Especialización actualizada a: " + especializacion);
        // Aquí iría la lógica para actualizar la especialización en la base de datos.
    } else {
        alert("Por favor, ingresa una especialización.");
    }
});

// Actualizar lugar de trabajo
document.getElementById('btnActualizarTrabajo').addEventListener('click', function() {
    const lugarTrabajo = document.getElementById('lugar_trabajo').value;
    if (lugarTrabajo) {
        document.getElementById('lugarTrabajoVista').textContent = lugarTrabajo;
        alert("Lugar de trabajo actualizado a: " + lugarTrabajo);
        // Aquí iría la lógica para actualizar el lugar de trabajo en la base de datos.
    } else {
        alert("Por favor, ingresa un lugar de trabajo.");
    }
});
// Obtener los valores desde localStorage
const nombreGraduado = localStorage.getItem('nombreGraduado');
const emailGraduado = localStorage.getItem('emailGraduado');

// Mostrar los valores en el perfil
document.getElementById('nombreGraduado').textContent = nombreGraduado;
document.getElementById('correoGraduado').textContent = emailGraduado;
