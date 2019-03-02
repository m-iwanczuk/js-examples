/* Obiekty */

let blogPost = {
    title: 'Andrzej Małysz na prezydenta',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore, enim fugiat aperiam quas deleniti, accusamus ut nemo molestiae rerum in, veritatis perferendis consectetur fugit error est atque provident impedit sed voluptates accusantium quae! Assumenda placeat iusto adipisci iste rem. Porro neque assumenda sed sunt possimus, earum recusandae atque vero!',
    author: { 
        name: 'Jan Kowalski', age: 51 
    },
    tags: ['polityka', 'dobra zmiana', 'bohater narodowy'],

    // metody - czyli funkcja definiowana dla obiektu

    printTitle() {
        console.log('Tytuł artykułu to ' + this.title ); // this odwołuje się do obiektu w którym się znajduje
    }
}

console.log(blogPost);
console.log(blogPost.title);
console.log(blogPost.tags[1]);
console.log(blogPost.author.age);

blogPost.printTitle();

blogPost.title = 'Jarosław Kaczyński prezydentem Polski';

console.log(blogPost.title);

blogPost.date = '2019-03-02';

console.log(blogPost);


/* Klasy */

class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    printInfo() {
        console.log(`Car's name is ${this.name}. Car's color is ${this.color}.`);
    }
}

let bugatti = new Car('bugatti', 'red');
let audi = new Car('audi', 'black');

console.log(bugatti);
console.log(audi);

//wywołanie metody z obiektu: obiekt.metoda

bugatti.printInfo();

/* Napisz klasę GimUser, która będzie miala wlasciwosc height w metrach i wage w kilogramach.
Klasa Gimuser ma metode, ktora liczy wskaznik BMI i loguje wynik obliczen.

Stworz obiekt klasy GimUser o wzroscie 1.72 i wadze 74 i zaloguj jego BMI

masa(kg)/wzrost(m)^2

*/


class GimUser {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    bmiCalc() {
        let bmi = this.weight /(this.height * this.height);

        console.log(bmi);
    }
}

let newUser = new GimUser(1.72, 74);
newUser.bmiCalc();