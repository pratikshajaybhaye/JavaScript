


let person={
    firstName : "Pratiksha",
    age : 24,
    isMarried : true,
    city : "Pune",
    country : "Bharat"
}
 let {firstName,age,isMarried,city="Mumbai",pin=12345} = person;     //Object Destructuring ES6 Feature
 console.log(firstName,age,isMarried,city,pin);

 console.log(`-------Destructuring Array---------`);
 let array = ["Jenny","Bill","Stew"];
 const element0 = array[0];
 const element1 = array[1];
 const element2 = array[2];

 let [actress, teslaOwner, MicroSoftOwner,appleCEO="Tim Cook"] = array;
 console.log(actress, teslaOwner, MicroSoftOwner,appleCEO);
