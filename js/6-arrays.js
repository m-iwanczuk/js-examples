/* Tablice - "uporządkowany zbiór danych" */

let names = ['Adam', 'Paweł', 'Anna'];
console.log(names);

console.log(names[0]);
console.log(names[2]);
// console.log(names[4]);  --przykład undefined - js nie uznaje tego za error!

names[3] = 'Tomasz'; // nie stosujemy, zeby nie nabalaganic w tablicy
console.log(names);

/* "Metody tablicowe" */

names.push('Julia'); // bezpieczniejszy sposób uzupełniania tablicy - nie musimy znać aktualnej komórki 
console.log(names);

console.log(names.length); // wyciąga długość tablicy

console.log(names.join()); // zamieni całą tablicę na string oddzielony przecinkami
console.log(names.join('+')); // zamieni całą tablicę na string oddzielony plusami
console.log(names.join('')); // zamieni całą tablicę na string jako ciąg znaków

console.log(names.reverse());

console.log(names.sort()); // sortuje tablice wg wartosci ASCII (nie do końca alfabetycznie)


/* Typy danych w tablicach */

let newArray = [12, 'Cześć', true, null, ['Adam', 'Ola'], {name:'Łukasz'}];
console.log(newArray);

console.log(newArray[4][1]); //jak wyciągnąć wartość z tablicy w tablicy


