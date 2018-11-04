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
    });

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=mulund%20west%20mumbai&key=AIzaSyDfGOG9aoyo4hS4OecPFDRoB-0D7Z42qag',
    json: true
}, (error, response, body)=>{
    console.log(`latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`longitude: ${body.results[0].geometry.location.lng}`);
});
