const geocode = require('./geocode.js');
const tempApi = require('./tempApi.js');


const getCityTemperature = async (city) => {
    try {
        const geometry = await geocode.getGeometryOfCity(city);
        const tempData = await tempApi.getTemperature(geometry);

        console.log(`${city} =>  Temperature : ${tempData.current.temp_c} °C`);

    }catch(err){
        throw err;
    }
}

getCityTemperature('New York, USA');
getCityTemperature('Ahmedabad, India');
getCityTemperature('Kolkata, India');
getCityTemperature('Pune, Maharashtra');


/**
 * using single request to Whether API
 */
// const getCityTemperatureV2 = async (city) => {
//     tempApi.getTemperatureByCityName(city).then(temp_c=>console.log(`city : ${city} => temperature : ${temp_c}`)).catch(console.error);
// }

// getCityTemperatureV2('New York, USA');
// getCityTemperatureV2('Ahmedabad, India');
// getCityTemperatureV2('Kolkata, India');
// getCityTemperatureV2('Pune, Maharashtra');