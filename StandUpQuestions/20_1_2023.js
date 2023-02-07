

const jsObj = {
    'name': 'Sanjay',
    'age': 20,
    'city': 'Ahmedabad',
    'country': 'India',
    'job': 'Software Engineer',
}

// console.log(JSON.stringify(jsObj));

for(let key of Object.keys(jsObj)){
    console.log(`${key}: ${jsObj[key]}`);
}  


const jsObj2 = {
    'id1' : '101',
    'id2' : '102',
    'id3' : '103',
    'id4' : '104',
    'id5' : '105',
    'id6' : '106',
    'id7' : '107',
    'id8' : '108',
    'id9' : '109',
    'id10' : '110',
    'id11' : '111',
    'id12' : '112',
}

let prop = 'id';

for(let i=1; i<=Object.keys(jsObj2).length; i++){   
    console.log(jsObj2[prop+i]);
}
