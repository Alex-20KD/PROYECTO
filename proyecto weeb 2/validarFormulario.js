function validarFormulario() {
    // Obtener los valores de los campos de entrada
    const emailIngresado = document.getElementById('email').value;
    const passwordIngresado = document.getElementById('password').value;

    // Definir las credenciales correctas
    const emailCorrecto = "gonzaloyzam.2019@gmail.com";
    const passwordCorrecta = "gonzalo30";

    // Verificar si los campos están vacíos
    if (emailIngresado === '' || passwordIngresado === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Validar las credenciales
    if (emailIngresado === emailCorrecto && passwordIngresado === passwordCorrecta) {
        console.log("Credenciales correctas, redirigiendo...");
        window.location.href = "perfil.html"; // Redirige al perfil
    } else {
        console.log("Credenciales incorrectas");
        alert('Correo o contraseña incorrectos.'); // Mensaje de error
        return false;
    }
    return true;
}
