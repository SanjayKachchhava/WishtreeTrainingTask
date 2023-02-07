let rectangle = {
    length : 10,
    width : 20,
    // doubt : arrow fun not working with this keyword
    findArea:function(p1,p2){
        console.log(this);

        return this.length*this.width
    }
}

var num = 1;
// area = function(){
//     console.log(this);
// }

const rectangle2 = {
    length : 20,
    width : 40,
}

// console.log(area());

console.log(rectangle.findArea.bind(rectangle2)());
console.log(rectangle.findArea.apply(rectangle2));
console.log(rectangle.findArea.call(rectangle2,));
