

let n1 = 100;
let n2 = n1;  //Deep Clone
n1 = 444;
console.log(n1); //444
console.log(n2); //100

const user= {
    name:"Jenny",
    age: 32
}
const developer = user; //Shallow Clone
developer.name = "Bill";
console.log(developer.name);  // Bill
console.log(user.name); //Bill

//Deep clone
// 1. spread Operator
// 2. Objcet.assign();
// 3. JSON.parse(), & JSON.stringify();

const person= {
    name:"Jenny",
    age: 32
}
console.log(`Deep Clone Using Spread Operator`);
const boy = {...person} //Deep Clone Using Spread Operator
person.age = 44;
console.log(boy.age); //32
console.log(person.age); //44

console.log(`Deep Clone Using Objcet.assign()`);
const smartBoy = Object.assign({}, boy)
smartBoy.name = "Stew Job";
console.log(smartBoy.name); // stew Job
console.log(boy.name); //  Jenny

console.log(`Deep Clone Using JSON.parse(), & JSON.stringify();`);

const gentleMan= {
    name:"Jenny",
    age: 32,
    address :{
        PIN: 334455,
        street : "Bergan"
    }
}
// const gentleWomen = {...gentleMan} //Spread Opeartor

const gentleWomen =  JSON.parse(JSON.stringify (gentleMan))
gentleWomen.address.street = "Khaugali"
console.log(gentleWomen.address.street); //Khaugali
console.log(gentleMan.address.street);//Khaugali

