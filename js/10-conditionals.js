/* instrukcja if */

let age = 15;

if(age<18) {
    console.log('Brak dostępu');
} else {
    console.log('Przyznano dostęp');
}

let bmi = 25;

if(bmi<15) {
    console.log('niedowaga');
} else if(bmi<25) {
    console.log('prawidłowa');
} else if(bmi<25) {
    console.log('nadwaga');
} else {
    console.log('otyłość');
}

// if zatrzymuje się na pierwszym spełnionym warunku
// DOBRA PRAKTYKA! sprawdzać if od najbardziej prawdopodonego (kwestie wydajności)


/* Instrukcja switch */

let lightColor = 'red';

switch(lightColor) {
    case 'red':
        console.log('stój');
        break;
    case 'yellow':
        console.log('czekaj');
        break;
    case 'green':
        console.log('jedź');
    default:
        console.log('sygnalizacja zepsuta');
}

// switch jest bardziej adekwatny przy konkretnych wartosciach, do przedziałów lepszy if

