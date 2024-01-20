

const arrayNumbers = [20, 11, 40, 25, 11, 9, 31, 60, 2, 19];

console.log(`------Step 1: Add 10 into each Element----`);
const arrayTransform = arrayNumbers.map((element)=>{
    return element + 10;
});
console.log(`After add 10 into each Element is : ${arrayTransform}`);

console.log(`----Step 2: Cune the array each element---`);
 const arrayCube = arrayNumbers.map((currentvalue)=>{
    return currentvalue* currentvalue * currentvalue;
 });
 console.log(`Cube of the Each array Elements is : ${arrayCube}`);

 console.log(`----Step 3: Add the Index Value into its Correspoding array Elements---`);
 const newArray = arrayNumbers.map((currentvalue,index)=>{
    return currentvalue+ index;
 });
 console.log(newArray);