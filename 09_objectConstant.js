const developer  = {
    name : "Pratiksha",
    age: 24,
    isMaried :true,
}
console.log(developer);
developer.age= 34;
console.log(developer);

//Not allowed
// developer = {

// }

console.log(`----Freeze Object----`);
Object.freeze(developer);
developer.isMaried= false;
developer.name = "Kishor";
console.log(developer);

console.log(`----Const Array----`);
const array = [2,3,4,5];
console.log(array);
array[0]= 100;
console.log(array);
// array = [99,88,77]// Not Allowed

console.log(`----Freeze Array----`);
Object.freeze(array);
array[1] = 777;
console.log(array);