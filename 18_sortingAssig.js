

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`-----Step 1: Reverse the Array-----`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`-----Step 2: Sorting method without any Custom Sorting-----`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log(`-----Step 3: Acending Order of Array-----`);
arrayRollNumbers.sort((a,b)=>{
    return a>b ? 1: -1; 
});
console.log(arrayRollNumbers);

console.log(`-----Step 4: Greater Number from Array-----`);
function largeElemet(num) {
    return num.reduce((largest,current)=>
        (current>largest ? current:largest),num[0]);
    }
    console.log(`Greter Number is : ${largeElemet(arrayRollNumbers)}`);

    console.log(`-----Step 5: Smallest Number from Array-----`);
function smallNumber(value) {
    return value.reduce((smallest, current)=>
    (current<smallest? current:smallest), value[0]);
}
console.log(`Smallest Number is : ${smallNumber(arrayRollNumbers)} `);

console.log(`-----Step 6: Remove Duplicate from Array from Array-----`);

const newArray = [...new Set(arrayRollNumbers )];
console.log(`After Remove Duplicate Numbers: ${newArray}`);