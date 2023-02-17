import request from "request";
import { geocode } from "./geocode";
import { getTemp } from "./forecast";

geocode('ahmedabad',(err:any,res:request.Response)=>{
    if(err) throw err;
    console.log(res.body.results[0].geometry);
    getTemp(res.body.results[0].geometry,(err:any,res:request.Response)=>{
        if(err) throw err;
        console.log(res.body.current.temp_c);
    });
});