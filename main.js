console.log('Hello Candace');

// const event = new Date();
// let year = event.getFullYear();
// console.log('month  :' + event.getMonth());
// let month = event.getMonth();
// console.log('day  :' + event.getDate());
// let day = event.getDate();
// fetch(`https://api.sunrise-sunset.org/json?lat=27.3304986&lng=-82.4611353,&date=${year}-${month}-${day}&formatted=0`)
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);

//     }).catch((err) => {
//         console.warn(err);
//     });

fetch('https://api.openweathermap.org/data/2.5/weather?zip=34232&units=imperial&appid=6e0d8a14c454b5a04af88b6054f71f99').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    console.log(data.name);

    //location
    const local = data.name;
    const localPlace = document.getElementById('city');
    localPlace.innerHTML = local;

    //air temp rounded
    const tempFloat = data.main.temp;
    const temp = Math.round(tempFloat);
    const tempPlace = document.getElementById('temp');
    tempPlace.innerHTML = temp;

    //wind direction
    const convertWD = data.wind.deg;

    let windConversion = 'south';

    function convertWind(windy) {
        if (windy > 348 || windy <= 11) {
            windConversion = 'N';
            return (windConversion);
        } else if (windy > 11 && windy <= 33) {
            windConversion = 'NNE';
            return (windConversion);
        } else if (windy > 33 && windy <= 56) {
            windConversion = 'NE';
            return (windConversion);
        } else if (windy > 56 && windy <= 78) {
            windConversion = 'ENE';
            return (windConversion);

        } else if (windy > 78 && windy <= 101) {
            windConversion = 'E';
            return (windConversion);
        } else if (windy > 101 && windy <= 123) {
            windConversion = 'ESE';
            return (windConversion);
        } else if (windy > 123 && windy <= 146) {
            windConversion = 'SE';
            return (windConversion);
        } else if (windy > 146 && windy <= 168) {
            windConversion = 'SSE';
            return (windConversion);
        } else if (windy > 168 && windy <= 191) {
            windConversion = 'S';
            return (windConversion);
        } else if (windy > 191 && windy <= 213) {
            windConversion = 'SSW';
            return (windConversion);
        } else if (windy > 213 && windy <= 236) {
            windConversion = 'SW';
            return (windConversion);
        } else if (windy > 236 && windy <= 258) {
            windConversion = 'WSW';
            return (windConversion);
        } else if (windy > 258 && windy <= 281) {
            windConversion = 'W';
            return (windConversion);
        } else if (windy > 281 && windy <= 303) {
            windConversion = 'WNW';
            return (windConversion);
        } else if (windy > 303 && windy <= 326) {
            windConversion = 'NW';
            return (windConversion);
        } else if (windy > 326 && windy <= 348) {
            windConversion = 'NNW';
            return (windConversion);
        }
    }


    const windDir = document.getElementById('windD');
    windDir.innerHTML = convertWind(convertWD);

    //wind speed rounded
    const windSpeedFloat = data.wind.speed;
    const windSpeed = Math.round(windSpeedFloat);
    const windSp = document.getElementById('windS');
    windSp.innerHTML = windSpeed;


}).catch((err) => {
    console.log(error);

});