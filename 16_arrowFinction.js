//1 Arrow function with no argumnebts and no return value

const show = () => {
  console.log(`Inside Arrow function with no argumnebts and no return value`);
};
show();

//2 Arrow function with argumnebts and no return value

const add = (num1, num2) => {
  console.log(`Addition is : ${num1 + num2}`);
};
add(10, 40);

//2 Arrow function with argumnebts and  return value

const multiply = (n1, n2) => {
  const result = n1 * n2;
  return result;
};
const returnValue = multiply(5, 5);
console.log(`Multiplication is ${returnValue}`);

//Write a arrow Function with Input value "JavaScript" & will return the total number of characters

const words = (number) => {
  const result = number.length;
  console.log(result);
};
words("JavaScript");

const totalCharCount = (inputValue)=>{
    return inputValue.length
}
const result = totalCharCount("JavaScript");
console.log(`Total Number of Character :${result}`);