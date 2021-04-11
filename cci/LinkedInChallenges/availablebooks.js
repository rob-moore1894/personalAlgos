// In this challenge you'll be developing an inventory application for a bookstore. You need to create a book class, which provides information about different books in the store. Each book will have a title, author, ISBN, and keep track of the number of available copies. You'll need a way to get each book's availability. If there aren't any copies of the book left, the function should return out of stock. If there are less than 10 copies, the function should return low stock. Otherwise the function should return in stock. You'll also need a function for selling a book. This will take the number of copies sold and subtract it from the total number of copies. If no argument is passed, we can default the number of copies to sell to one. Lastly, you'll want a restock function, which takes in a number of copies to restock and adds it to the total number of copies. If no argument is passed, we can default the restock number to five.

class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability() {
        return this.stockLevel();
    }

    stockLevel = () => {
        console.log(this.numCopies); 
        if(this.numCopies === 0) {
            console.log("Out of Stock");
        } else if(this.numCopies < 10) {
            console.log("Low stock");
        } else {
            console.log("In stock");
        }
    }
    
    sellBook = (num) => {
        if(typeof num !== "undefined") {
            if(this.numCopies - num > 0){
                this.numCopies -= num;
                console.log(`Sold ${num} ${num !== 1 ? "copies" : "copy" }... ${this.numCopies} available`)
            } else {
                console.log(`Not enough available copies \n${this.numCopies} available`)
            }
        } else {
            if(this.numCopies > 0){
                this.numCopies -= 1;
                console.log(`1 copy sold... ${this.numCopies} available`)
            } else {
                console.log(`Don't have one available`)
            }
        }
    }

    restock = (num) => {
        if (typeof num !== "undefined") {
            this.numCopies += num;
            console.log(`Added ${num} more... ${this.numCopies}`)            
        } else {
            this.numCopies += 5;
            console.log(`Restocked with 5 more... ${this.numCopies}`)
        }
    }    
}

let hacking = new Book("Hacking: The Art of Exploitation", "Jon Erickson", "978-1-59327-144-2", 5);
let littleWomen = new Book("Little Women", "Louisa May Alcott", "0-451-52341-5", 150)

console.log(hacking)
hacking.availability;
hacking.restock();
hacking.sellBook(2);
hacking.sellBook(10);

littleWomen.availability;
