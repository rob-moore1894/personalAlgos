num = 4562;
let lastDigit = num % 10
console.log(lastDigit); 
console.log(num);

const reverseInteger = (num) => {
    let rev_num = 0;
    if(typeof(num) == "number"){
        while (num > 0)
        { 
            rev_num = rev_num * 10 + num % 10; 
            num = num / 10;
        }
        return rev_num; 
    }
    
}

console.log(reverseInteger(4562)); 
console.log(reverseInteger(0)); 
console.log(reverseInteger(4321)); 

const isPrime = (n) => {
    for(let x = 2; x * x <= n; x++){
        if(n % x == 0){
            return false; 
        }
    }
    return true; 
}

console.log(isPrime(2));

const factorial = (n) => {
    if(n < 0){
        return -1; 
    }
    if(n == 0){
        return 1; 
    } else {
        return n * factorial(n-1); 
    }
}

console.log(factorial(5));

//Compute the nth Fibonacci number
const fib = (n) => {
    if(n <= 0) {
        return 0;
    } 
    else if(n == 1){
        return 1;
    } 
    else {
        return fib(n-1) + fib(n-2); 
    }
}

console.log(fib(11));

//Calculate the Fibonacci numbers to the nth number
function allFib(n){
    var memo = [n+1];
    for (let i = 0; i < n; i++){
        console.log(i + ": " + fibo(i, memo));
    }
}

function fibo(n, memo){
    if(n < 0){
        return 0;
    } else if (n == 1){
        return 1; 
    } else if (memo[n] > 0) {
        return memo[n];
    }

    memo[n] = fibo(n-1, memo) + fibo(n-1, memo);
    return memo[n];
}

console.log(allFib(11));

// Powers of 2
const powersOf2 = (n) => {
    if (n < 1){
        return 0;
    } else if (n == 1){
        console.log(1);
        return 1; 
    } else {
        let prev = powersOf2(n/2);
        let curr = prev * 2; 
        console.log(curr);
        return curr;
    }
}

powersOf2(8);

