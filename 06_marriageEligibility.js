

var marraigeEligibility = function (gender , age) {
    if (gender=="Female" && age>=18 || gender=="Male" && age>=21 || gender==isNaN && age==isNaN) {
        console.log(`Gender is ${gender} & Age is ${age}, then You are Eligible for Marriage.`);
    } else {
        console.log(`Gender is ${gender} & Age is ${age}, then You are Not Eligible for Marriage.`);
    }
}
marraigeEligibility("Male",17);
marraigeEligibility("Female",28);
marraigeEligibility("Male",25);
marraigeEligibility("Female",16);
marraigeEligibility("Other",35);
marraigeEligibility("Other",41);


