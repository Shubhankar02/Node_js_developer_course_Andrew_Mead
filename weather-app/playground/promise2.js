const request = require('request');


const geocodeAddress = (address)=>{
    return new Promise((resolve, reject)=>{
        const encoddedAdress = encodeURIComponent(address)
        const key = 'AIzaSyCdLt8yDvDxVJ3SDDM83YImnxu9olsbdeo';
    
        console.log(encoddedAdress)
    
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoddedAdress}&key=${key}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject(`Unable to connect: ${err}`);
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address');
            } else if (body.status === 'OK') {
                resolve(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } else {
                console.log('Something is wrong');
    
            }
        });
    })
}

geocodeAddress('Mulund west').then((location)=>{
    console.log(JSON.stringify(location, undefined, 2));
}, (err)=>{
    console.log(err)
})