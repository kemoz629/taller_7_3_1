function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const terminosCheckbox = document.getElementById('terminos');
const registrarBtn = document.getElementById('regBtn');

if (nombre === '' ||
    apellido === '' ||
    email === '' ||
    password1 === '' ||
    password2 === '') {
    showAlertError();
    return;
}
