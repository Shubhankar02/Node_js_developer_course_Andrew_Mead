const request = require('request');
const yargs = require('yargs');


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

const encoddedAdress = encodeURIComponent(argv.address)

console.log(encoddedAdress)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoddedAdress}&key=AIzaSyAm6WYzVIZ2LcjfBV_s7KKHv3JBd5SwBbM`,
    json: true
}, (error, response, body)=>{
    console.log(`latitude: ${body.results[0].formatted_address}`);
    console.log(`latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`longitude: ${body.results[0].geometry.location.lng}`);
});
