
const botonMensaje = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", function () {
    if (mensaje.hidden) {
        mensaje.textContent =
            "El mensaje de Pandora: respeta la naturaleza, " +
            "valora a tu familia y recuerda que nuestras " +
            "acciones pueden proteger o destruir nuestro hogar.";

        mensaje.hidden = false;
        botonMensaje.textContent = "Ocultar mensaje";
    } else {
        mensaje.hidden = true;
        botonMensaje.textContent = "Descubrir un mensaje de Pandora";
    }
});
