let person = {
  firstName: "Pratiksha",
  age: 24,
  isMarried: true,
};
function greet(message, msg) {
  console.log(`Hello, ${message}, ${this.firstName}, ${msg}`);
}
// greet ("good Morning")
greet.call(person, "Good Morning", "How are You");

console.log(`========= apply() ============`);

function show(message, msg) {
  console.log(`Hello ${message}, ${this.firstName}, ${msg}`);
}

show.apply(person, ["Good Morning", "How are you ?"]);

console.log(`========== bind() ===========`);

function display(message, msg) {
  console.log(`Hello ${message}, ${this.firstName}, ${msg}`);
}

const newFunction = display.bind(person);

newFunction("Good Morning", "How are you ?");
