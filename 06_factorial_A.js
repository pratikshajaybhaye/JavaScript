
function factorialOfNum(num) {
    if (num==0 || num==1) {
        return 1;
    }
    if (num<0 || num==null || num==undefined){
        return ` Invalid Input`
    }
    let result = 1
for (let index = 1; index <=num; index++){
    result = result * index;
}
return result;
}
let result= factorialOfNum(5);
console.log(`Factorial Number of 5 is : ${result}`);

console.log(`----------------------------`);
let result1= factorialOfNum(3);
console.log(`Factorial Number of 1 is : ${result1}`);

console.log(`----------------------------`);
let result2= factorialOfNum(null);
console.log(`Factorial Number of Null is : ${result2}`);

console.log(`----------------------------`);
let result3= factorialOfNum(8);
console.log(`Factorial Number of 8 is : ${result3}`);

console.log(`----------------------------`);
let result4= factorialOfNum(undefined);
console.log(`Factorial Number of Undefined is : ${result4}`);

console.log(`----------------------------`);
let result5= factorialOfNum(9);
console.log(`Factorial Number of 9 is : ${result5}`);

console.log(`----------------------------`);
let result6= factorialOfNum(0);
console.log(`Factorial Number of 0 is : ${result6}`);


