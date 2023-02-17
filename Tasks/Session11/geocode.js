const axios = require('axios');

const getGeometryOfCity = (city) => {
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

module.exports = {
    getGeometryOfCity
};