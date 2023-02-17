import request from 'request'

const WHETHER_API_KEY = process.env.WHETHER_API_KEY || "2373050177c1434989f60208230902";
const url = `http://api.weatherapi.com/v1/current.json?key=${WHETHER_API_KEY}`;


export const getTemp = ({lat,lng}:{lat:number,lng:number},callback: Function)=>{
    request({url : `${url}&q=${lat},${lng}`,json : true}, (error, response : request.Response)=>{
        callback(error, response);
    });
};
