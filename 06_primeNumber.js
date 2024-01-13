

function isPrime(num) {
    for (let index = 2; index < num; index++){
if (num%index==0) {
    return false;
}       
    }
    return true;
}
let result = isPrime(7);
console.log(`7 is Prime Number : ${result} `);
let result1 = isPrime(4);
console.log(`4 is Prime Number : ${result1} `);