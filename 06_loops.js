// For Loop
console.log("2, 4, 6 ,8, 10 Numbers to print");
//  2, 4, 6 ,8, 10 Numbers to print
for (let index = 2; index <=10; index= index+2) {
    console.log(index);   
}


console.log(`========= Numbers from 10 to 1 ==============`);
for (let index = 10; index >=1; index--) {
    console.log(index);  
}


//  While Loop

console.log(`========= Numbers from 1 to 10 ==============`);
var i=1;
while (i<=10) {
    console.log(i);
    i++;
}

// Do While Loop

console.log(`========= Numbers from 1 to 10 ==============`);
var i = 0;
do {
    console.log(i);
    i++;
} while (i<=10);

// Break & Continue
console.log("-------");
for (let index = 0; index <=5; index++) {
    if (index==2) {
        break;
    }
    console.log(index);
}
 console.log(" =================== ");
for (let index = 0; index <=5; index++) {
    if (index==2) {
        continue;
    }
    console.log(index);
}

console.log("========");
// first 15 odd numbers
var count=0;
for (let index = 1; index <=15; index=index+2) {
    console.log(index);    
    count=count+1;
}