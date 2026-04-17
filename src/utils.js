// src/utils.js

export function traducirClima(codigo) {
    const codigosClima = {
        0: "Cielo despejado ☀️",
        1: "Principalmente despejado 🌤️",
        2: "Parcialmente nublado ⛅",
        3: "Nublado ☁️",
        45: "Niebla 🌫️",
        48: "Escarcha 🌫️",
        51: "Drizna ligera 🌧️",
        61: "Lluvia ligera 🌦️",
        80: "Lluvia leve 🌧️", // Este es el que te salió en la foto
        81: "Lluvia moderada ⛈️",
        95: "Tormenta eléctrica 🌩️"
    };

    // Si el código no está en la lista, devolvemos el número por defecto
    return codigosClima[codigo] || `Clima desconocido (Código: ${codigo})`;
}