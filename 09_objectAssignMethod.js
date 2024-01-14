const developer  = {
    name : "Pratiksha",
    age: 24,
    isMaried :true,
}


console.log(`-------Cone Obect-----`);
const newDeveloper=  Object.assign({},developer)
newDeveloper.name = "Jenny";
console.log(newDeveloper);
console.log(developer);


console.log(`------Object Merge-----`);
const user = {
    name : "Bill",
    desgination : "CEO"
}

const address = {
    city :"LA",
    Country : "USA",
    pin : 12345
}

Object.assign(user,address);
console.log(user);
console.log(address);

//another method

const mergeObj = Object.assign({}, user,address)
console.log(mergeObj);