

function greet (callback) {
    console.log("Inside Greet Function...");
    callback();
    return function () {
        console.log("Returning One More Function.");
    }
}
const talk = function () {
    console.log("Good Morning");
}
const returnFunction = greet (talk);
returnFunction();
//greet(talk)();