const geocode = require('./geoCoding');


let city = "New York";
city = "Ahmedabad";
city = "Bangalore";
city = "Chennai";

// geocode.geoCodeCity(city).then(console.log).catch(console.error);

geocode.getCodeCityFetch(city);

