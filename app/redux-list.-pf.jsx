var redux = require('redux');

// starting up redux 
console.log('Starting up redux');


// °|°|°|°|°|°|°
// this file is only 
// for testing puposes 
// pure functions 
function add (a, b) {
    return a + b; 
}


var a = 3; 
function add (b) {
    return a + b;
}


var result; 

function add (a, b) {
    return a + b + new Date().getSeconds();
}

function changeProp(obj) {
    return {
        ...obj,
        name: 'x'
    }
// obj.name = 'y';
// return obj; 
}


// var res = changeProp({
//     name: 'x',
//     age: 5555
// });

var StartingValue = {
    name: 'y', 
    age: 5555
}

var res = changeProp(StartingValue);
console.log(StartingValue);

console.log(res);
