const boton = document.querySelector("button");
const color = document.getElementById("color");

function colorRandomPicker () {
    let digitos ="0123456789ABCDEFGH";
    let colorHex ="#";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16)
        colorHex += digitos[randomIndex];
    }
    return colorHex
}

boton.addEventListener("click", function () {
    let colorRandom = colorRandomPicker();
    // Actualiza solo el texto
    color.textContent = colorRandom;
    // Actualiza el color de fondo
    document.body.style.backgroundColor = colorRandom;
})