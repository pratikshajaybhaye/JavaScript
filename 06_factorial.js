

let factorial = function (num) {
    if (num==0 || num==1) {
        return 1;
    }
    if (num<0) {
        return `Invalid Input that is Negative Number ${num}`
    }
    let result= 1;
    for (let index = 1; index <= num; index++){
result= result * index;       
    }
    return result;
}
let result= factorial(5);
console.log(result);

let result1= factorial(null);
console.log(result1);