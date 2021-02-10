var num = 4562;
let lastDigit = num % 10
console.log(lastDigit);
console.log(num);

const reverseInteger = (num) => {
    let rev_num = 0;
    if (typeof (num) == "number") {
        while (num > 0) {
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
    for (let x = 2; x * x <= n; x++) {
        if (n % x == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(2));

const factorial = (n) => {
    if (n < 0) {
        return -1;
    }
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

//Compute the nth Fibonacci number
const fib = (n) => {
    if (n <= 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(11));

//Calculate the Fibonacci numbers to the nth number
function allFib(n) {
    var memo = [n + 1];
    for (let i = 0; i < n; i++) {
        console.log(i + ": " + fibo(i, memo));
    }
}

function fibo(n, memo) {
    if (n < 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (memo[n] > 0) {
        return memo[n];
    }

    memo[n] = fibo(n - 1, memo) + fibo(n - 1, memo);
    return memo[n];
}

console.log(allFib(11));

// Powers of 2
const powersOf2 = (n) => {
    if (n < 1) {
        return 0;
    } else if (n == 1) {
        console.log(1);
        return 1;
    } else {
        let prev = powersOf2(n / 2);
        let curr = prev * 2;
        console.log(curr);
        return curr;
    }
}

powersOf2(8);

const { count } = require('console');
// Super Telephones

// You communicate using an advanced system of cans on strings. Messages are passed between these cans, but most cans aren't connected to each other directly. Instead, cans pass messages between each other until the message reaches the intended recipient.

// For some reason, though, some of these messages aren't ever reaching their intended recipient, and you suspect that some strings on cans are missing. 

// You talk through each can and record the ID of each can and the IDs with which it can communicate directly. Each can has one or more cans with which it can communicate, and these lines of communication are bidirectional; if 8 says it can communicate with 11, then 11 will say it can communicate with 8.

// You need to figure out how many cans are in the group that contains program ID 0.

// 0 <-> 2
// 1 <-> 1
// 2 <-> 0, 3, 4
// 3 <-> 2, 4
// 4 <-> 2, 3, 6
// 5 <-> 6
// 6 <-> 4, 5

// Can 0 by definition.
// Can 2, directly connected to can 0.
// Can 3 via can 2.
// Can 4 via can 2.
// Can 5 via cans 6, then 4, then 2.
// Can 6 via cans 4, then 2.

const fs = require('fs')

const readFileRaw = async file => fs.readFileSync(file, 'utf-8')

async function challenge() {
    const data = (await readFileRaw("./input.txt")).split('\r\n')
    const cans = data.map(line => line.split(">")[1].split(', ').map(Number))

    let groups = []
    function route(can) {
        if (groups.includes(can)) return 0
        groups.push(can)
        return cans[can].reduce((acc, val) => acc + route(val), 1)
    }
    const groupCount = cans.map((_, i) => route(i))[0]
    return groupCount;
}
challenge().then(console.log)


var fs = require('fs');
var path = require('path');

var getWordCount = function (filePath, callback) {
    fs.readFile(filePath, 'utf-8', function (err, data) {
        if (err) {
            callback(err, null);
            return;
        }

        var wordCount = data.trim().split(' ').length;
        callback(null, wordCount);
    });
};

var callBack = function (err, data) {
    if (err) {
        console.log("errer", err);
    }
    if (data) {
        console.log("datas", data);
    }
}

var getTotalWordCount = function (filePathOne, filePathTwo, callback) {
    // YOUR CODE HERE
    // getWordCount(filePathOne, (err, data) => {
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     callback(data);
    // });

    // getWordCount(filePathTwo, (err, data) => {
    //     if(err){
    //         console.log(err);
    //         return; 
    //     }
    //     callback(data);
    // })
    var count = 0;
    var fileOneCount = getWordCount(filePathOne, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        return data;
    });

    var fileTwoCount = getWordCount(filePathTwo, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        return data;
    });

    callback(null, fileOneCount + fileTwoCount)
};

var result = getTotalWordCount('./files/fileOne.txt', './files/fileTwo.txt');
console.log(result); // not working...

module.exports = getTotalWordCount;

// getTotalWordCount("cci/someStuff.txt", "cci/someMoreStuff.txt", callBack);


