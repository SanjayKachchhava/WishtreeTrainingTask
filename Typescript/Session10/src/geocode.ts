import request from 'request'

export const geocode = (city:string,callback: Function)=>{
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
    request({url : url,json : true}, (error, response : request.Response)=>{
        callback(error, response);
    });
};
