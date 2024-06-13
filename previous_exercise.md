// 1- Person Object with Array Methods

// Create a person object with properties name and age,
//and a method that takes an array of friends' names and
//logs a greeting for each friend using a loop.

// const friends = ['Zack', 'Yvonne', 'Laura', 'Xander', 'George', 'David', 'Ivan', 'Rachel',
// 'Steve', 'Alice', 'Julia', 'Kevin', 'Wendy', 'Eve', 'Tina']

// const person = {
// name: "Bucky",
// age: 30,
// greetfriends: function (friends) {
// friends.forEach(friend => {
// console.log(`Hi ${friend}, my name is ${this.name} and I am ${this.age} years old.`);
// });
// }

// }

// person.greetfriends(friends);

// // 2- Object Factory Function with Arrays

// // Create a class that returns a new person object with 3 random hobbies from an array of hobbies.
// //Include a method to list all hobbies using a loop.

// const hobbiesList = [
// "Reading",
// "Painting",
// "Hiking",
// "Cooking",
// "Gardening",
// "Swimming",
// "Photography",
// "Writing",
// "Cycling",
// "Knitting",
// "Playing chess",
// "Playing the guitar",
// "Traveling",
// "Bird watching",
// "Baking"
// ];

// class Person {
// constructor(name, age, hobbiesList) {
// this.name = name;
// this.age = age;
// this.hobbies = [];
// //select 3 hobbies and push onto list
// while (this.hobbies.length < 3) {
// const randomHobby = hobbiesList[Math.floor(Math.random() * hobbiesList.length)];
// if (!this.hobbies.includes(randomHobby)) {
// this.hobbies.push(randomHobby);
// }
// }
// }

// listHobbies() {
// const hobbiesString = this.hobbies.join(', ').replace(/, ([^,]\*)$/, ' and $1').toLowerCase();

// console.log(`This person's hobbies are: ${hobbiesString}.`);
// }
// }

// 3- Classes with Arrays

// Use a class to create a person object with an array of favourite movies.
// Add a method to add a new movie to the list.
// Add another method to display all movies using a loop.

// const favouriteMovies = [
// "The Shawshank Redemption",
// "The Godfather",
// "The Dark Knight",
// "Pulp Fiction",
// "Forrest Gump",
// "Inception",
// "The Matrix",
// "Fight Club",
// "The Lord of the Rings: The Return of the King",
// "Star Wars: Episode V - The Empire Strikes Back",
// "Interstellar",
// "The Silence of the Lambs",
// "Saving Private Ryan",
// "The Green Mile",
// "Gladiator"
// ];

// class Person {
// constructor(name, movies) {
// this.name = name;
// this.favMovies = [];
// while (this.favMovies.length < 3) {
// const randomMovie = movies[Math.floor(Math.random() * movies.length)];
// if (!this.favMovies.includes(randomMovie)) {
// this.favMovies.push(randomMovie);
// }
// }

// }

// addNewMovie(movie) {
// if (!this.favMovies.includes(movie)) {
// this.favMovies.push(movie)
// } else {
// console.log("This movie is already one of their favs!");
// }

// }

// listMovies() {
// const moviesString = this.favMovies.join(', ').replace(/, ([^,]\*)$/, ' and $1').toLowerCase();

// console.log(`This person's favourite movies are: ${moviesString}.`);
// }

// }

// 4- Classes with Array Methods
// Define a Class: Create a class named Person that has a constructor accepting name
//and age as parameters.
// Instance Method: Add a method to the class to return the age of the person instance.
// Static Method: Add a static method to the class that takes an array of Person instances
//and calculates the average age using the reduce method.

// const names = ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George",
// "Hannah", "Ian", "Jane", "Kevin", "Laura", "Mike", "Nina", "Oscar"];

// const ages = [25, 32, 29, 24, 40, 35, 28, 22, 30, 27, 31, 26, 33, 23, 34]

// class Person {
// constructor(name, age) {
// this.name = name;
// this.age = age;
// }

// // Instance method to return the age (optional)
// getAge() {
// console.log(`${this.name} is ${this.age}, years old.`)
// }
// }

// class PersonMaker {
// constructor(names, ages) {
// this.names = names;
// this.ages = ages;

// this.people = {};

// names.map((name, index) => new Person(name, ages[index]));
// }

// listPeople() {
// this.people.forEach(person => {
// console.log(`${person.name} is ${person.age} years old.`)
// });
// }
// }
