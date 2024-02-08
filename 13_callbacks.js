

function jenny(callback) {  // arg = 100
console.log(`After session..Jenny Started Homework`);
console.log(`Jenny Completed all steps`);
console.log(`Then She is ready to call back Bill`);
    callback();
}

let bill = function () {
    console.log(`I am Bill and I am going to play Cricket`);
    console.log(`I Know Jenny likes me, Hence once she completed her hoework`);
    console.log(`Shw eill definitely call me back....`);
    console.log(`Then I willCopy all assignment as it is...`);
}


// let a = 100;
// console.log(a);
jenny(bill)


let great = function () {
    console.log(`Hey....Good Morning`);
}

// setTimeout(greet,5000); //1 sec = 1000 Milli Seconds

setTimeout(function () {
    for (let index = 0; index < 5; index++) {
console.log(index);        
    }
    
},3000);


// setInterval (function () {
//   console.log(`Hello..`);  
// },2000)
// clearInterval(result);