/* Zasięg zmiennych */

let result = 10;

function addNumbers() {
    result = 2 + 2;

    newResult = 17;  // jesli zmienna nie jest zadeklarowana przez 'var' będzie globalna! trzeba uważać
    console.log(result);
}

addNumbers();

console.log(result);
//console.log(newResult);


// !!! zmienne staramy sie robic/deklarować jak najbardziej lokalne !!!

if(true) {
    //let number = 20;  -- 'let' w blokach logicznych nie będzie działać!
    var number = 20;
    let newNumber = 15;

}

console.log(number);
console.log(newNumber);  // ponieważ zadeklarowane jest przez 'let' wyrzuci błąd.