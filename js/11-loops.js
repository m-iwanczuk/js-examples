/* pętla for */

for(let i = 0; i<5; i++) {
    console.log('wykonanie pętli');
    console.log(i);
}


let names = ['Adam', 'Ola', 'Kasia', 'Tomek'];

/* for(let i =0; i<names.length; i++) {
    console.log(names[i]);
} */

names.forEach(function(element, index){
    console.log(element + ' ma index ' + index);
});


let person = {neme: 'Łukasz', age: 31};

console.log(person['name']);  // person.name; == person['name'] - gdybym potrzebowal uzyc zmiennej
console.log(person.age);

/* for (let key in person) {
    console.log(key);
} */

for (let key in person) {
    console.log(person[key]);
}

/* Pętla while */
// stosujemy wtedy gdy nie wiemy ile raze petla ma sie wykonac


let randomNumber = parseInt(Math.random()*10); //wyrzuci nam liczbe calkowita 0-9

/* while(randomNumber>2) {
    console.log(randomNumber);

    randomNumber = parseInt(Math.random()*10);
} */

do {
    console.log(randomNumber);

    randomNumber = parseInt(Math.random()*10);

} while(randomNumber>2);

// rożnica miedzy while i do while - do while wykona sie przynajmniej raz.


/* Instrukcje sterujące pętlami */

for(let i = 0; i<100; i++) {

    if(i>50) {
        break;
    }

    console.log(i);
}

// return dziala tylko w funkcji - break nie przerwie dzialania funkcji

let numberArray = [1,5,7,15,12,33,14]; // wyloguj parzyste:

for (let i = 0; i<numberArray.length; i++) {

    if(numberArray[i]%2 !== 0) continue; // "continue" == przerwij pętlę i przejdź do kolejnej iteracji

    console.log(numberArray[i]);
}