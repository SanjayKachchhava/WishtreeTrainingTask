

class Vehicle {

    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    toString() {
        return `name : ${this.name} \nmodel: ${this.model}`;
    }
}
class Car extends Vehicle {
    constructor(name, model, color) {
        super(name, model);
        this.color = color;
    }

    toString() {
        return `car : {\n${super.toString()}\ncolor: ${this.color}\n}`;
    }
}

var car = new Car("BMW", "Volkswagen",'White');

console.log(car.toString());