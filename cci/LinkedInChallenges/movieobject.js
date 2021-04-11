// For this JavaScript challenge, we're going back to the basics, the prototype chain. Unlike other programming languages, JavaScript uses objects to construct inheritance. Each object has a private property which links to another object. This object is known as its prototype. This prototype object has a prototype of its own, and this chain continues until an object with a null prototype has been reached. Your task is to create a movie object that takes in five arguments. Title, director, genre, release year and rating. The movie prototype should have a function called get overview, which logs the following overview for each film. <Movie>, a <genre> film directed by <director> was released in <release year>. It received a rating of <rating>. You can use either class or function syntax to create your prototype.

class Movie {
    constructor(title, director, genre, releaseYear, rating){
        this.title = title; 
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    getOverview(){
        console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`)
    }
}

const mightyDucks = new Movie("The Mighty Ducks", "Stephen Herek", "Comedy", 1992, "6.6/10");

const darkKnightRises = new Movie("The Dark Knight Rises", "Christopher Nolan", "Action", 2012, "8.4/10")

mightyDucks.getOverview();
darkKnightRises.getOverview();