/* operatory arytmetyczne */

console.log(9%5);  //modulo (stosuje się do badania parzystosci lub podzielnosci przez n)

let number = 10;

console.log(number);
console.log(++number); // number += 1; number = number + 1;
console.log(number++);
console.log(number);
console.log(--number);

/* Operatory przypisania */

let age = 15;

age += 5; // age = age + 5;
console.log(age);

age %= 2; // aktualną wartość age podziel przez 2 i przypisz dla age reszte z tego dzielenia (0);
console.log(age);


/* operatory porównania */

console.log(2==2);
console.log(2=='2');
console.log(2==='2'); // dodatkowo sprawdza typ porównywanych danych

console.log(2!=2);
console.log(2!=='2');

console.log('imie' === 'imie');
console.log('imie' === 'nazwisko');

console.log(2>3);

console.log(2>2);
console.log(2>=2);


/* Operatory logiczne */

console.log('name'=="name" && 2==2);
console.log('name'=="name" && 2>2);

console.log('name'=="name" || 2>2);
console.log('name'=="sname" || 2>2);

console.log(!(2==2));


/* Operator warunkowy */

let wiek = 15;
let isMature = (wiek>18)?'pełnoletni':'nieletni';  // wartosc ? jesli_prawda : jeśli_fałsz
console.log(isMature);
