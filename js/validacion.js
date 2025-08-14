function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.getElementById("regBtn").addEventListener("click", function() {

    let password1 = document.getElementById("password1").value;

     if (password1.length < 6) {
    showAlertError(); 
    return;
  }})


// Función para validar el formulario
function validarFormulario() {
    // Obtener los valores de las contraseñas
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    
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
document.addEventListener("DOMContentLoaded", function() {
    const botonRegistro = document.getElementById("regBtn");
    botonRegistro.addEventListener("click", validarFormulario);
});