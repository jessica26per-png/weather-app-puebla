// src/api.js

/**
 * Obtiene las coordenadas y luego el clima de una ciudad.
 */
export async function fetchWeather(city) {
    try {
        // 1. Obtener Latitud y Longitud
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        if (!geoData.results) throw new Error("Ciudad no encontrada");

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Obtener Clima Actual
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        // 3. Devolver objeto limpio
        return {
            city: `${name}, ${country}`,
            temp: weatherData.current_weather.temperature,
            code: weatherData.current_weather.weathercode
        };

    } catch (error) {
        throw error; // Lanzamos el error para que main.js lo maneje
    }
}