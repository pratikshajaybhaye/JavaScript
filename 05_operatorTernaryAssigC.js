
console.log(`------Step 1--------`);
var maleMarraigeEligibility = function (gender, age, boyname) {
    var result = gender == "Male" && age >= 21 ? `Hey ${boyname} you are eligible for Marraige.` : `Hey ${boyname} You are not eligible for Marraige.`
    console.log(result);
}
maleMarraigeEligibility("Male", 25, "Billgates");
maleMarraigeEligibility("Male", 17, "Stew Jobs");

console.log(`-----Step 2------`);
var femaleMarraigeEligibility = function (gender, age, girlName) {
    var result = gender == "Female" && age >= 18 ? `Hey ${girlName} You are Eligible for Marraige.` : `Hey ${girlName} You are not eligible for Marraige.`
    console.log(result);
}
femaleMarraigeEligibility("Female", 16, "Jenifer");
femaleMarraigeEligibility("Female", 27, "Malinda Gates");