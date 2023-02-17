const geocode = require('./geocode');
const forecast = require('./forecast');
 
geocode('ahmedabad', function(err, data) {
    if(err) throw err;
    else{
        
        forecast.getTemp(data,function(err,data){
            if(err) throw err;
            else{
                console.log(data);
            }
        });
    }
})