// ### Exercise 1: Create Book Class

// Objective: Learn the basics of creating classes in JavaScript.

// - Create a `Book` class with properties for title, author, and genre.
// - Implement a method to display book information.


class Book {
    constructor(title, author, genre, year) {
        if (!title || !author || !genre || !year) {
            throw new Error('All book details must be provided.');
        }

        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
        this.identifier = "";
        //use the helper function getIdentifer(); to get the 1st 2 letters or numbers of each
        //detail and push to identifier to make a unique searchable reference.
        this.identifier = this.getIdentifier();
    }

    getIdentifier() {
        //takes the frist 2 letters of each value and returns a unique identifier
        let details = {
            identifier: this.identifier, title: this.title, author: this.author,
            genre: this.genre, year: this.year,
        };

        let identifier = ""

        Object.values(details).forEach(value => {

            if (isNaN(Number(value))) {
                //if book value is not a number, get first 2 letters and push to identifier       
                identifier += value.slice(0, 2);
            } else {
                //if book value is  a number, convert to string, 
                //then get first 2 letters and push to identifier  
                identifier += value.toString().slice(-2);
            }

        });
        return identifier.toLowerCase();

    }


}

// ### Exercise 2: Create Library Class

// Objective: Understand class relationships.

// - Create a `Library` class with a property to hold an array of books.
// - Implement methods to add and remove books from the library.

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, genre, year) {
        let details = new Book(title, author, genre, year);

        //search books array for unique identifier, if not found, push to library
        const bookFound = this.books.find(book => book.identifier === details.identifier);
        !bookFound ? this.books.push(details) : console.log(`Book Already Exists In Library. Ident = ${details.identifier}.`);
    }


}