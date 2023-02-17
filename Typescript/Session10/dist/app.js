"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const geocode_1 = require("./geocode");
const forecast_1 = require("./forecast");
(0, geocode_1.geocode)('ahmedabad', (err, res) => {
    if (err)
        throw err;
    console.log(res.body.results[0].geometry);
    (0, forecast_1.getTemp)(res.body.results[0].geometry, (err, res) => {
        if (err)
            throw err;
        console.log(res.body.current.temp_c);
    });
});
