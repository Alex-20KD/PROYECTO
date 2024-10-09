document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Guardar los datos en localStorage
    localStorage.setItem('nombreGraduado', nombre);
    localStorage.setItem('emailGraduado', email);
    localStorage.setItem('passwordGraduado', password);

    // Redirigir a la página de inicio de sesión
    window.location.href = 'inicio_sesion.html';
});
