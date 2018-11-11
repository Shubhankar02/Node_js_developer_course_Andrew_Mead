const request = require('request');


var geocodeAddress = (address)=>{
    return new Promise((resolve, reject)=>{
        const encoddedAdress = encodeURIComponent(address)
        const key = 'AIzaSyALa96ZmTtyl3l7ShN8Mnzez00iLsEUeZ0';
    
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
                resolve({
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