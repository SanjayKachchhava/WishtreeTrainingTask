

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    drive(){
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
    getFeatures(){
        return this.make + " " + this.model + " " + this.year;
    }
}


let getCar = (make, model, year) => {
    return new Car(make, model, year);
}


module.exports = {getCar};