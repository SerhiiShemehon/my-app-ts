let isOpenModal: boolean = false;

let count: number = 0;

let firstName: string = 'Tom';
let lastName: string = 'Bobbington';

let numberList: number[] = [1, 2, 3, 4, 5, 6];
let colorList: string[] = ['red', 'blue', 'green'];

function message(): void {
    console.log("This is my message");
}

let u: undefined = undefined;
let n: null = null;

interface Name {
    firstName: string;
    lastName: string;
}
function greeting(nameObj: Name) {
    console.log(`Hello, ${nameObj.firstName} ${nameObj.lastName}`);
}

function sum(x: number, y: number): number {
    return x + y;
}

function minus(x: number, y: number): number {
    return x - y;
}

function fullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
}