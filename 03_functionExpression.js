
var display = function () {
    console.log("Display");
}
// console.log(display);
display();  //Function Call

// Name Function
function maleMarraigeEligibility(gender,age,boyname) {
   var result = gender=="Male" && age>=21 ? `Hey ${boyname} you are eligible for Marraige` : "Unfortunately - You are not eligible, please try next time."
console.log(result);
}
maleMarraigeEligibility("Male",25,"Bililgates");

//Expression Function

 var maleMarraigeEligibility = function(gender,age,boyname) {
    var result = gender=="Male" && age>=21 ? `Hey ${boyname} you are eligible for Marraige` : "Unfortunately - You are not eligible, please try next time."
 console.log(result);
 }
 maleMarraigeEligibility("Female",20,"Bililgates");
