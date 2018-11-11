const request = require('request');

var geocodeAddress = (address, callback) => {
    const encoddedAdress = encodeURIComponent(address)
    const key = 'AIzaSyCdLt8yDvDxVJ3SDDM83YImnxu9olsbdeo';

    console.log(encoddedAdress)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoddedAdress}&key=${key}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(`Unable to connect: ${err}`);
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        } else {
            console.log('Something is wrong');

        }
    });
};

module.exports.geocodeAddress = geocodeAddress;


