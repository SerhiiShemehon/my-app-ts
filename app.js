"use strict";
let isOpenModal = false;
let count = 0;
let firstName = 'Tom';
let lastName = 'Bobbington';
let numberList = [1, 2, 3, 4, 5, 6];
let colorList = ['red', 'blue', 'green'];
function message() {
    console.log("This is my message");
}
let u = undefined;
let n = null;
function greeting(nameObj) {
    console.log(`Hello, ${nameObj.firstName} ${nameObj.lastName}`);
}
function sum(x, y) {
    return x + y;
}
function minus(x, y) {
    return x - y;
}
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
