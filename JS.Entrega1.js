// Definir tipo de tramite
const Tramite1 = "1- comun";
const Tramite2 = "2- urgente";
const Tramite3 = "3- online";

// Función para otorgar turnos
function otorgarTurno() 
{
    // Ingresar nombre
    let nombreIngresado = prompt("Ingrese su Nombre:");
    console.log(nombreIngresado);

    // Validar si el nombre ingresado no es null o vacío
    if (nombreIngresado === null || nombreIngresado.trim() === "") {
        alert("Error! No ingresaste un Nombre!");
        return false; // Salir de la función si no hay nombre
    } else {
        alert("Hola, " + nombreIngresado + "! ¿Qué tramite buscas hoy?");

        // Solicitar turno
        let mensaje = "Solicite su turno:\n" + Tramite1 + "\n" + Tramite2 + "\n" + Tramite3;
        let Tramite = parseInt(prompt(mensaje));
        console.log("Tramite seleccionado:", Tramite);

        // Validar si el tramite es un número entre 1 y 3
        if (isNaN(Tramite) || Tramite < 1 || Tramite > 3) {
            alert("Error! Tramite no válido.");
            return false; // Salir si el tramite es inválido
        } else {
            mensaje = "Turno otorgado, " + nombreIngresado + ".";
            alert(mensaje);
        }
    }

    // Mensaje final
    mensaje = "Te esperamos en la fecha indicada. Por favor, si debes cancelar tu turno no olvides hacerlo 24 horas antes para que no se te cobre el mismo. Muchas gracias por tu comprensión.";
    alert(mensaje);
    return true; // Turno otorgado con éxito
}

// Repetir la función hasta 3 veces
for (let i = 0; i < 3; i++) {
    let turnoExitoso = otorgarTurno();
    if (!turnoExitoso) break; // Si algo sale mal, salir del ciclo
}

    mensaje = "No hay más turnos disponibles en el momento.";
    alert(mensaje);

    console.log("Terminó el programa");