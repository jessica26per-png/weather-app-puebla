// src/main.js
import { fetchWeather } from './api.js';
import { traducirClima } from './utils.js';

const btn = document.getElementById('searchBtn');
const input = document.getElementById('cityInput');
const resultDiv = document.getElementById('weatherResult');

btn.addEventListener('click', async () => {
    const city = input.value.trim();
    if (!city) return;

    resultDiv.innerHTML = "<p>Cargando...</p>";

    try {
        // 1. PRIMERO obtenemos los datos
        const data = await fetchWeather(city);

        // 2. SEGUNDO traducimos el código que ya recibimos
        const descripcion = traducirClima(data.code);

        // 3. TERCERO mostramos todo en el HTML
        resultDiv.innerHTML = `
            <h2>${data.city}</h2>
            <p class="temp">${data.temp}°C</p>
            <p>${descripcion}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});

// Agregamos esto para que funcione con la tecla Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btn.click(); // Esto simula el clic en el botón automáticamente
    }
});
