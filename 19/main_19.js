const getWeatherData = async function getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&appid=62407cd57624d3c4aacfa1ac539eb018`, {
        method: `GET`
    })
    const data = await response.json();
    const container = document.querySelector(`#weather`);
    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const speed = data.wind.speed;
    const deg = data.wind.deg;
    const weatherIcon = data.weather[0].icon;

    const tempElement = document.createElement('h3');
    tempElement.textContent = `Температура: ${temperature} °C`;
    container.appendChild(tempElement);

    const pressureElement = document.createElement('h3');
    pressureElement.textContent = `Давление: ${pressure} hPa`;
    container.appendChild(pressureElement);

    const iconUrl = `http://openweathermap.org/img/w/04n.png`;

    const iconElement = document.createElement('img');
    iconElement.src = iconUrl;
    container.appendChild(iconElement);

    const humidityElement = document.createElement('h3');
    humidityElement.textContent = `Давление: ${humidity} hPa`;
    container.appendChild(humidityElement);

    const windElement = document.createElement('h3');
    windElement.textContent = `Скорость ветра: ${speed} м/с, Направление: ${deg} градусов`;
    container.appendChild(windElement);

    const descriptionElement = document.createElement('h3');
    descriptionElement.textContent = `Описание погоды: ${weatherDescription}`;
    container.appendChild(descriptionElement);
}
const refreshButton = document.querySelector(`#refreshButton`);
refreshButton.addEventListener(`click`, function () {
    const container = document.getElementById('weather');
    container.innerHTML = '';
    getWeatherData()
})
document.addEventListener(`DOMContentLoaded`, getWeatherData)