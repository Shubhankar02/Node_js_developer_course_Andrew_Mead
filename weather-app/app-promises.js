const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encoddedAdress = encodeURIComponent(argv.address);
const key = 'AIzaSyC1Bb2ojP4OM7V2owKlcRuPYLrRpPbDzv8';
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoddedAdress}&key=${key}`

axios.get(geocodeUrl).then((res) => {
    // console.log(res)
    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find the address')
    }
    const lat = res.data.results[0].geometry.location.lat;
    const lng = res.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/42bd9c703a3c933c24ebd2fc2ec57212/${lat},${lng}`
    console.log(res.data.results[0].formatted_address);
    return axios.get(weatherUrl)
}).then((res) => {
    const temp = res.data.currently.temperature;
    const apparentTemperature = res.data.currently.apparentTemperature;
    console.log(`It's currently ${temp} and it feels like ${apparentTemperature}`);

}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
})