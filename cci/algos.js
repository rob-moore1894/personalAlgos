function getHighestNumber(a, b, c) {
    if(!isNaN(a) && !isNaN(b) && !isNaN(c)){
        console.log(true)
        return true;
    } else {
        console.log(false)
        return false;
    }
}

getHighestNumber(1, "2", 3);

// Two Sum - LeetCode - Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
    var answer = []; 
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){            
            if (nums[j] == target - nums[i]){
                answer.push(i, j);
            }
        }
    }
    return answer
}

console.log(twoSum([3,2,4], 6));
// ============================================================ //

const reverseInteger = (num) => {
    let rev_num = 0; 
    while (num > 0)
    {
        rev_num = rev_num * 10 + num % 10;
        num = num / 10; 
    }
    return rev_num; 
}

console.log(reverseInteger(4562))

let num = 4562;
let lastDigit = num % 10
console.log(lastDigit); 
console.log(num)

function printSum(x){
	var sum = 0; 
	// code below
	for(let i = 0; i<=x; i++){ 
		sum += i
		console.log("At: " + i + " , Sum:" + sum);
	}
	return sum; 
}
var y = printSum(255) // should print all the integers from 0 to 255 and with each integer, print the sum so far
console.log(y) // should print 32640


const numChar = (str) => {
    console.log(str.split(" ").join(""));
    return str.split(" ").join("").length;
}

console.log(numChar(`I get along and work well with just about anyone.  Oddly enough, I like to ride a motorcycle and watch pro wrestling - just not at the same time.`));

var string = `I like to say that I get along and work well with just about anyone.  Oddly enough, I like to ride a motorcycle and watch pro wrestling - just not at the same time. Some people consider me a polymath, which is a fancy word for having a lot of useless information.  For example, Dr. Neil deGrasse Tyson wrestled in high school to protect the "nerds" and completed his post-Doctoral research at the University of Texas.  Who needs to really know that?  No one.`;
console.log(string.length);
console.log(string.split(" ").join("").length);

var string2 = `I get along and work well with just about anyone.  Oddly enough, I like to ride a motorcycle and watch pro wrestling - just not at the same time.`
console.log(string2.length)

// isUnique - Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures? 


// centuryFromYear - Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

const centuryFromYear = (year) => {
    if(year <= 0){
        console.log("Year must be greater than 0");
    } else if(year <= 100){
        console.log(1)
    } else if(year % 100 == 0){
        console.log(Math.trunc(year/100));
    } else {
        console.log(Math.trunc(year/100 + 1));
    }
}

centuryFromYear(1985);
centuryFromYear(-1);
centuryFromYear(2000);
centuryFromYear(2001);

// Adjacent Elements Product - Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const adjacentElementsProduct = (inputArray) => {
    if(inputArray.length > 1){
        var product = inputArray[0] * inputArray[1];
        for(let i = 1; i < inputArray.length; i++){
            var nextProduct = inputArray[i] * inputArray[i+1];
            if(nextProduct > product){
                product = nextProduct; 
            }
        }
        console.log(product);
        return product; 
    } else {
        console.log(inputArray[0]);
        return inputArray[0]; 
    }
}

adjacentElementsProduct([1]);
adjacentElementsProduct([1, 0, 1, 0, 1000]);

function adjacentElementsProduct2(arr) {
    return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}
console.log(adjacentElementsProduct2([1]));
console.log(adjacentElementsProduct2([1, 0, 1, 0, 1000]));


//Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having a non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
function makeArrayConsecutive2(statues){
    statues.sort(); 
    var missingNumbers = []; 
    for(let i = statues[0]; i < statues[statues.length-1]; i++){
        missingNumbers.push(i);
    }
    console.log(missingNumbers);
    
}

makeArrayConsecutive2([6, 2, 3, 8]);

const RandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const userGuess = (n, compGuess) => {
    if (n === compGuess) {
        console.log(`Guessed ${compGuess} correctly!!`)
    } else if (n > compGuess) {
        console.log(`${n} is too high`); 
    } else if (n < compGuess) {
        console.log(`${n} is too low`);
    }
}

var computerGuess = RandomNumber(100);
console.log(computerGuess);

userGuess(50, computerGuess);
userGuess(8, computerGuess);

const doSearch = (array, targetValue) => {
    let min = 0;
    let max = array.length - 1;
    let guess;

    while(max >= min){
        guess = Math.floor((min + max)/2);
        console.log(`Index = ${guess}`, `Value of array at ${guess} = ${array[guess]}`)
        if(array[guess] === targetValue){
            return guess;
        }
        else if(array[guess] < targetValue){
            console.log(`${array[guess]} is too low`)
            min = guess + 1;
        }
        else {
            console.log(`${array[guess]} is too high`)
            max = guess - 1;
        }
    }
    return -1; 
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
console.log(`Found prime at index ${result}`);