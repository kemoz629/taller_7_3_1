function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Función para crear el alert de error dinámicamente
function crearAlertError() {
    // Crear el div principal del alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger alert-dismissible fade';
    alertDiv.setAttribute('role', 'alert');
    alertDiv.id = 'alert-danger';
    
    // Crear el párrafo con el mensaje
    const p = document.createElement('p');
    p.textContent = 'Los datos ingresados no cumplen con los requisitos solicitados';
    
    // Crear el botón de cerrar
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn-close';
    button.setAttribute('data-bs-dismiss', 'alert');
    button.setAttribute('aria-label', 'Close');
    
    // Agregar los elementos al div
    alertDiv.appendChild(p);
    alertDiv.appendChild(button);
    
    // Agregar el alert al final del body
    document.body.appendChild(alertDiv);
}

// Función para verificar si existe el alert y crearlo si no existe
function verificarYCrearAlert() {
    const alertExiste = document.getElementById('alert-danger');
    
    if (!alertExiste) {
        crearAlertError();
    }
}

// Función para iniciar el observer que escucha cambios en el DOM
function iniciarObserver() {
    // Crear el observer que vigila cambios en el DOM
    const observer = new MutationObserver(function() {
        verificarYCrearAlert();
    });
    
    // Configurar para observar cambios en todo el body
    observer.observe(document.body, {
        childList: true,  // Observa cuando se agregan/quitan elementos
        subtree: true     // Observa en todos los elementos hijos también
    });
    
    // Verificar inmediatamente al iniciar
    verificarYCrearAlert();
}

// Función para validar el formulario
function validarFormulario() {
    // Obtener los valores
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    if (nombre === '' ||
        apellido === '' ||
        email === '' ||
        password1 === '' ||
        password2 === '') {
        showAlertError();
        return;
    }

    if (password1.length < 6) {
        showAlertError();
        return;
    }

    // Verificar si el checkbox está marcado
    const terminos = document.getElementById("terminos").checked;

    // Validar que las contraseñas sean iguales
    if (password1 !== password2) {
        showAlertError();
        return false;
    }

    // Validar que se hayan aceptado los términos
    if (!terminos) {
        showAlertError();
        return false;
    }

    // Si todo está bien, mostrar mensaje de éxito
    showAlertSuccess();
    return true;
}

// Agregar el evento click al botón de registro
document.addEventListener("DOMContentLoaded", function () {
    // Iniciar el observer que vigila el DOM infinitamente
    iniciarObserver();
    
    const botonRegistro = document.getElementById("regBtn");
    botonRegistro.addEventListener("click", validarFormulario);
});


