require('dotenv').config({
    path: '/Users/robertsons/Desktop/drop/test/weather/.env'
});

const DarkSky = require('dark-sky');
const darksky = new DarkSky(process.env.DARK_SKY_API_KEY); // Your API KEY can be hardcoded, but I recommend setting it as an env variable.

darksky
    .options({
        latitude: process.env.LAT,
        longitude: process.env.LON,
        language: 'en',
        exclude: ['minutely', 'alerts', 'flags']
    })
    .get()
    .then(function(data) {
        let currently = data.currently;
        let today = data.daily.data[0];
        let weekly = data.daily;

        // Currently
        console.log('\nCURRENTLY\n---------');
        console.log(currently.summary);
        console.log('Temperature: ' + Math.round(currently.temperature) + '°F');
        console.log(
            'Feels Like: ' + Math.round(currently.apparentTemperature) + '°F'
        );
        console.log(
            'Chance of Rain: ' + currently.precipProbability * 100 + '%'
        );

        // Today
        console.log('\nTODAY\n-----');
        console.log(data.hourly.summary);
        console.log('Low: ' + Math.round(today.temperatureLow) + '°F');
        console.log('High: ' + Math.round(today.temperatureHigh) + '°F');
        console.log('Chance of Rain: ' + today.precipProbability * 100 + '%');

        // This Week
        console.log('\nTHIS WEEK\n---------');
        console.log(weekly.summary);
    });
