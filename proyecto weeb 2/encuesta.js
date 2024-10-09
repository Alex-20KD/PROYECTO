document.getElementById('crearEncuestaForm').addEventListener('submit', function(event) { 
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const pregunta1 = document.getElementById('pregunta1').value;
    const opcion1 = document.getElementById('opcion1').value;
    const opcion2 = document.getElementById('opcion2').value;
    const opcion3 = document.getElementById('opcion3').value;

    // Crear un objeto de encuesta con el título, la pregunta y las opciones
    const encuesta = {
        titulo: titulo,
        pregunta: pregunta1,
        opciones: [opcion1, opcion2, opcion3]
    };

    // Aquí puedes enviar la encuesta al servidor o base de datos
    alert('Encuesta creada: ' + titulo);

    // Agregar la encuesta a la lista de encuestas enviadas
    const listaEncuestas = document.getElementById('listaEncuestas');
    const encuestaDiv = document.createElement('div');
    encuestaDiv.className = 'encuesta';
    encuestaDiv.innerHTML = `
        <h3>${encuesta.titulo}</h3>
        <p>${encuesta.pregunta}</p>
        <form class="resultadoEncuesta">
            <label>
                <input type="radio" name="respuesta" value="${opcion1}">
                <span class="cuadro">${opcion1}</span>
            </label>
            <label>
                <input type="radio" name="respuesta" value="${opcion2}">
                <span class="cuadro">${opcion2}</span>
            </label>
            <label>
                <input type="radio" name="respuesta" value="${opcion3}">
                <span class="cuadro">${opcion3}</span>
            </label>
            <button type="submit">Enviar Respuesta</button>
        </form>
    `;
    
    listaEncuestas.appendChild(encuestaDiv);
    this.reset(); // Reinicia el formulario
});
