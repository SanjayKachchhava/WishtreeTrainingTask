const axios = require('axios');

const WHETHER_API_KEY = process.env.WHETHER_API_KEY || "2373050177c1434989f60208230902";

const url = `http://api.weatherapi.com/v1/current.json?key=${WHETHER_API_KEY}`;

const getTemperature =  ({lat,lng}) => {
    return new Promise((resolve, reject) => {

        axios.get(`${url}&q=${lat},${lng}`).then(res => {
            // console.log(res);
            const data = res.data;
            // console.log(data);
            resolve(data)
        }).catch(reject);;
    });
}
// getTemperature({lat: 23.0225, lng: 72.5714});\

const getTemperatureByCityName =  (city) => {
    return new Promise((resolve, reject) => {

        axios.get(`${url}&q=${city}`).then(res => {
            // console.log(res);
            const data = res.data;
            // console.log(data);
            resolve(data.current.temp_c)
        }).catch(reject);;
    });
}

module.exports = {
    getTemperature,
    getTemperatureByCityName
};
