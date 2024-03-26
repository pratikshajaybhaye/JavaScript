

let array = [44,22,33,44,22,66,77];
console.log(array);

const setOfRollNum = new Set();
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(33);
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(66);
setOfRollNum.add(77);

console.log(`Size is : ${setOfRollNum.size}`);

console.log(`Deleting 66`);
setOfRollNum.delete(66);
console.log(setOfRollNum);

console.log(`Is Element Available`);
console.log(setOfRollNum.has(22));

console.log(`-----Set Traversing----`);  // 66 is Deleting
for (const Element of setOfRollNum) {
    console.log(setOfRollNum);
}

console.log(`----Removing the Duplicate elements in Array----`);
console.log(array);
const set = new Set(array);
console.log(set);

//Brand Array in Unique Elements

const newArray = [...new Set (array)]
console.log(newArray);