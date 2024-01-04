
console.log(`----------Step 1----------`);
function greaterNumber(n1,n2){
    console.log("Given Numbser are:", n1,n2);
    var result = Math. max(n1,n2);
    console.log(`Greatest Numbers is : ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`------Step 2-------`);
function isEvenOrOddNum(num){
    console.log("Given Numbser are:",num);
    var result = num % 2 == 0 ? "Is Even Number: "+ num  : "Is Odd Number :" + num 
    console.log(result);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);


console.log(`------Step 3-------`);
function wordlength(string) {
    var length = string.length;
     return length % 2 === 0 ? "Even":"Odd"
}
var result= wordlength("JavaScript");
console.log(`Length of Javascript is : ${result }`);

var result= wordlength("developer");
console.log(`Length of developer is : ${result }`);

var result= wordlength("Google");
console.log(`Length of Google is : ${result }`);
