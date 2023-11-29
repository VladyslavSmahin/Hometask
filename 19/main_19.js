document.addEventListener(`DOMContentLoaded`, async function getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=standard&appid=62407cd57624d3c4aacfa1ac539eb018`, {
            method: `GET`
        })
    const data = await response.json()

})
