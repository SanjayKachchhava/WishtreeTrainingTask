const request = require('request');
const WHETHER_API_KEY = process.env.WHETHER_API_KEY || "2373050177c1434989f60208230902";
const url = `http://api.weatherapi.com/v1/current.json?key=${WHETHER_API_KEY}`;

const getTemp = ({lat,lng}, callback)=>{
    request.get({url:`${url}&q=${lat},${lng}`,json:true},(err,res)=>{
    
        if(err) callback("error while fetching data",undefined);
        else callback(undefined,res.body.current.temp_c);        
    });
}

module.exports = {getTemp};