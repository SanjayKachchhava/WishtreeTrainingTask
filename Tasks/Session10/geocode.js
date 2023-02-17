const request = require('request');

const geocode = (city, callback)=>{
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
    request.get({url:url,json:true},(err,res)=>{
    
        if(err) callback("error while fetching data",undefined);
        else callback(undefined,res.body.results[0].geometry);

    });
}

module.exports = geocode;