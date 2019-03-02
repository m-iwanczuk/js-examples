/* Definicja funkcji */

function sayHello() {
    console.log('Cześć');
}

/* Wywołanie funkcji */

sayHello();

/* Wyrażenie funkcyjne */

const sayName = function() {
    console.log('Michał');
}

sayName();


/* Parametr funkcji */

function printInfo(name = 'Jan') {
    console.log('My name is ' + name );
}

printInfo('Adam');
printInfo('Michał');
printInfo();

/* Napisz funkcję, która wyświtli wynik dodawania dwóch dowolnych liczb */

function addNumbers(num1, num2) {
   // console.log(num1 + num2);

/* let adding = num1 + num2
    return adding;
*/

    return num1 + num2;  // return kończy funkcję - nic po nim się nie wykona:

    console.log('po return');  // ciemniejszy kolor oznacza, że ta linia się nie wykona, bo jest po returnie
}

addNumbers(3,21);  
addNumbers(990,1000); 

let result = addNumbers(7,7);
console.log(result);

console.log('Wynik dodawania to ' + addNumbers(5,2));

/* Funkcje strzałkowe */
const multiplyNumbers = (num1, num2) => {
    console.log( num1 * num2 );
}

multiplyNumbers(4,2);


// alternatywny zapis - jednoliniowy (jesli jest tylko jeden parametr, mozna pominac nawias)
const squareNumber = a => console.log(a*a);
squareNumber(2);

let squeredNumber = squareNumber(5);
console.log(squeredNumber);

