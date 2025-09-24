
let usuarioCorrecto = "JhonTabar";
let claveCorrecta = "1234";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");

    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        mensaje.textContent = "Bienvenido " + usuario;

        setTimeout(() => {
            window.location.href = "books.html";
        }, 1000);
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos.";
    }
});