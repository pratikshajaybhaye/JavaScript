

const array = ["Jenny","Elon","Stew","Bill"]
console.log(`----Before reverse----`);
console.log(array);
console.log(`-----After Reverse----`);
array.reverse();
console.log(array);


const arr = ["Jenny","Elon","Stew","Bill"]
console.log(`-------Before Sorting in Ascending Order----`);
console.log(arr);
console.log(`-------After Sorting in Ascending Order----`);
arr.sort(); //by default sort in ascending order
console.log(arr);

console.log(`-------After Sorting in Descending Order----`);
arr.reverse();
console.log(arr);

console.log(`-------Soting Number array-----`);
const arrayNum = [20,1,50,9,79,8];
console.log(`------Before Sorting----`);
console.log(arrayNum);
console.log(`------After Sorting in Ascending Order----`);
// arrayNum.sort();// this is will not give us the expexted result
console.log(arrayNum);

arrayNum.sort((a,b)=>{
    return a>b ? 1: -1; //[20,1,50,9,79,8];
});
console.log(arrayNum);
console.log(`------After Sorting in Descending Order----`);

arrayNum.sort((a,b)=>{
    return a>b ? -1 : 1;
})
console.log(arrayNum);

//Another method to user arrayNum.reverse();


