document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = '99c5454932c5ad81d5f9de8248644150';  // Replace with your OpenWeatherMap API key

    if (city === "") {
        document.getElementById('weatherResult').innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    const apiUrl = `https://openweathermap.org/api/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weather = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherResult').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}. Please try again.</p>`;
        });
});
