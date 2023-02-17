
const axios = require('axios');

const geoCodeCity = (city) => {
    return new Promise((resolve, reject) => {

        const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
        axios.get(url).then(res=>{
            const data = res.data.results[0];
            // console.log(data);

            // console.log(data.geometry);
            
            resolve(data.geometry);
        }).catch(err=>{
            // throw err;
            reject(err);
        });
    });
}

const getCodeCityFetch = (city) => {

    // set url as constant
    // const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
    const API_KEY = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg';
    const url =`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${API_KEY}`;
            
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

module.exports = {geoCodeCity,getCodeCityFetch};
