function cargarDatos() {
    const textoIntroducido = document.getElementById('texto').value;

    if (textoIntroducido.trim() === "") {
        alert("Por favor, ingresa algún dato.");
        return;
    }

    // Obtener los datos existentes en localStorage o crear un nuevo arreglo si no hay datos
    let listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];

    // Agregar el nuevo dato al arreglo
    listaDatos.push(textoIntroducido);

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem('listaDatos', JSON.stringify(listaDatos));

    // Limpiar la casilla de texto
    document.getElementById('texto').value = "";

    // Mostrar los datos guardados como lista
    verificarDatos();
}

function verificarDatos() {
    // Obtener los datos guardados en localStorage
    const listaDatos = JSON.parse(localStorage.getItem('listaDatos')) || [];

    // Seleccionar el contenedor de resultados
    const resultadoContenedor = document.getElementById('resultadoContenedor');
    const resultado = document.getElementById('resultado');
    
    // Limpiar el contenedor antes de mostrar la lista
    resultado.innerHTML = "";

    if (listaDatos.length > 0) {
        // Hacer visible el contenedor de resultados
        resultadoContenedor.style.display = 'block'; // Mostrar el contenedor de resultados

        // Crear una lista de elementos
        listaDatos.forEach(dato => {
            const item = document.createElement('p');
            item.innerText = dato;
            resultado.appendChild(item);
        });
    } else {
        resultadoContenedor.style.display = 'none'; // Si no hay datos, ocultar el contenedor
        resultado.innerText = "No hay datos guardados.";
    }
}




