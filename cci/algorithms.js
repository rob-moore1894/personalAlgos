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
