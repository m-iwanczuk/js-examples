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
