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

num = 4562;
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