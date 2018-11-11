const request = require('request');

const getWeather = (lat, lng, callback ) => {
    request({
        url: `https://api.darksky.net/forecast/42bd9c703a3c933c24ebd2fc2ec57212/${lat},${lng}`,
        json: true
    }, (err, response, body) => {
        if(!err && response.statusCode === 200) {
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            })        
        } else {
            callback(`There is something wrong with the data ${response.statusCode}`)
        }
    });    
}

module.exports.getWeather = getWeather;