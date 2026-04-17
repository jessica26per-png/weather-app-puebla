// src/main.js
import { fetchWeather } from './api.js';

const btn = document.getElementById('searchBtn');
const input = document.getElementById('cityInput');
const resultDiv = document.getElementById('weatherResult');

btn.addEventListener('click', async () => {
    const city = input.value.trim();
    if (!city) return;

    resultDiv.innerHTML = "<p>Cargando...</p>";

    try {
        const data = await fetchWeather(city);
        resultDiv.innerHTML = `
            <h2>${data.city}</h2>
            <p class="temp">${data.temp}°C</p>
            <p>Código de clima: ${data.code}</p>
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
