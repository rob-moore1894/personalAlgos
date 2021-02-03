// Stacks - LIFO, think back button on web

// functions: push, pop, peek, length

const isPalindrome = (word) => {
    var letters = [];
    var rword = ''; 

    word = word.toLowerCase(); 
    // put letters of word into stack
    for(var i = 0; i < word.length; i++){
        letters.push(word[i]);
    }
    
    // pop off the stack in reverse order
    for (var i = 0; i < word.length; i++){
        rword += letters.pop();
    }
    
    if (rword === word){
        console.log(word + " is a palindrome")
    } else {
        console.log(rword + " and " + word + " are not palindromes")
    }
}

isPalindrome("rAcEcAr");
isPalindrome("Bob"); 
isPalindrome("yo-yo");

// Create a stack
class Stack {
    constructor(){
        this.count = 0; 
        this.storage = {};
    }

    // Adds a value onto the end of the stack
    push = (value) => {
        this.storage[this.count] = value;
        this.count++
    }

    // Removes and returns the value at the end of the stack
    pop = () => {
        if(this.count === 0){
            return undefined; 
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result
    }

    // Return the size/length of the stack
    size = () => {
        return this.count;
    }

    // Returns the value at the end of the stack DOES NOT REMOVE THE ITEM
    peek = () => {
        return this.storage[this.count-1];
    }

    // Check if the stack is empty
    isEmpty = () => {
        return this.storage === 0;
    }

    // Print the stack
    print = () => {
        while(this.count-1 >= 0) {
            console.log(this.storage[this.count-1]);
            this.count--;
        }
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.isEmpty());
myStack.print();