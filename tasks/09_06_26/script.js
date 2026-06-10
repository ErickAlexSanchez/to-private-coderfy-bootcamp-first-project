// Una función directa, sin variables complejas ni condicionales (if/else).
// Solo captura elementos y les cambia el estilo y el texto.

function activarPerfil() {
    // 1. Buscamos el botón por su ID
    const boton = document.getElementById('btn-magia');
    
    // 2. Le cambiamos el texto y los colores directamente
    boton.innerText = "¡Siguiendo!";
    boton.style.backgroundColor = "#334155";
    boton.style.color = "#38bdf8";

    // 3. Buscamos la tarjeta completa y le cambiamos el borde
    const tarjeta = document.querySelector('.tarjeta-perfil');
    tarjeta.style.borderColor = "#38bdf8";
    tarjeta.style.boxShadow = "0 0 20px rgba(56, 189, 248, 0.4)";

    // 4. Mensaje de éxito para que sientan la interactividad
    alert("¡JavaScript conectado! Acabas de modificar el CSS y el HTML en tiempo real.");
}