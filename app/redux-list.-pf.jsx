var redux = require('redux');

// starting up redux 
console.log('Starting up redux');
// we're gonna start to build the next stage with redux to load the movies. :=)


// This code and many other code is part of the process that I'm taking to the project of having something cool with redux...
// kinda creaating in my head while I'm coding here part of its algorithm .... 

// °|°|°|°|°|°|°


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
