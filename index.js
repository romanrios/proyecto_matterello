window.addEventListener("DOMContentLoaded", () => {

    const reservaBtn = document.getElementById("reservaBtn");

    function handleClick() {
        alert("¡Gracias por reservar!");
        reservaBtn.innerHTML = "Reserva exitosa"; // reemplaza texto del botón
        reservaBtn.removeEventListener("click", handleClick); // desactiva funcionalidad

    }

    reservaBtn.addEventListener("click", handleClick);

});

