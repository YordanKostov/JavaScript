function attachEvents() {
    let button = document.getElementById('submit');
    button.addEventListener('click', getWeather);
    let currentDivChild = document.createElement('div');
    let upcomingDivChild = document.createElement('div');

    async function getWeather() {
        try {
            let url = "http://localhost:3030/jsonstore/forecaster/locations";
            let response = await fetch(url);
            let data = await response.json();
            let location = document.getElementById('location').value;
            let cityCode = '';

            for (let city of data) {
                if (city.name == location) {
                    cityCode = city.code;
                }
            }

            response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`);
            let currentForecast = await response.json();

            let threeDay = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${cityCode}`);
            let threeDayForecast = await threeDay.json();

            let current = document.getElementById('current');
            let upcoming = document.getElementById('upcoming');
            let forecast = document.getElementById('forecast').style.display = '';


            currentDivChild.innerHTML = `${currentForecast.name}<br />
            ${currentForecast.forecast.low}&#176 / ${currentForecast.forecast.high}&#176<br />
            ${currentForecast.forecast.condition}`;


            upcomingDivChild.textContent = threeDayForecast.name;
            console.log(upcomingDivChild);
            current.appendChild(currentDivChild);
            upcoming.appendChild(upcomingDivChild);

        } catch {
            console.log('Fail');
        }

    }

}

attachEvents();