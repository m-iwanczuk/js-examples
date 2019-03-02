/* Typ liczbowy */

let age = 30;
console.log(age);
console.log(typeof age);

/* Typ łańcuchowy - string */

let name = 'Adam';
console.log(name);

let number = '15'; //uwaga pułapka!!! ;) liczba zapisana w cydzyslowie bedzie typem string!
console.log(number); 
console.log(typeof number);

console.log('This is Luke\'s car')  // operator znaku specjalnego \

console.log('My name is ' + name + '. My age is ' + age);  //konkatenacja stringu - łączenie stringów

//ES6 wprowadza interpolację stringów:

console.log(`My name is ${name}. My age is ${age}`);  // uwaga! to nie sa ' ani " tylko `

/* Typ logiczny - boolean - [true/false] */

let itIsTrue = true;
console.log(itIsTrue);
console.log(typeof itIsTrue);

/* Typy specjalne */

let fname;

console.log(fname);

fname = null;

console.log(fname);

/* Dynamiczne typowanie */

console.log(2-'2');
console.log(2+'2');
console.log(2+true);
console.log(2-'true');
console.log(typeof (2-'true'));
console.log(2/0);
console.log(typeof (2/0));