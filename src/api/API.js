const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q=';

export default getTemp = (cityName) => {
    console.log("getTemp " + cityName)
    return fetch(URL + cityName)
        .then(res => res.json())
        .then((resJSON) => {
            console.log("then" + JSON.stringify(resJSON.list[0].main.temp))
            return resJSON.list[0].main.temp
        });
}

