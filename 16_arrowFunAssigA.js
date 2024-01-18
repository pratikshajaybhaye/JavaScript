

console.log(`------Step 1------`);

const greeting = ( ) => {
 console.log("Good Morning, Today is Thursday");
}
greeting();

console.log(`------Step 2------`);
 const multiply = (num1,num2,num3=1) => {
    console.log(`Multiplication is: ${num1 * num2 * num3}`);
 }

 multiply(5,5,2);
 multiply(10,4)

 console.log(`------Step 3------`);

 const number = (n1,n2,n3,n4,n5) => {
    const result = n1 + n2 + n3 + n4 + n5
    return result
 }
 const returnValue = number(100,100,200,349,756);
console.log(`a. Addition of Number is: ${returnValue}`);

const returnArray = number("I am", "learning", "ES6", "features", "in depth")
console.log(`c. Addition of String is: ${returnArray} `);


