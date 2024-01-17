console.log("----------------Step 1-------------");

function client() {
  console.log("Hello My Name is Pratiksha Jaybhaye.");
}
client();

function role() {
  console.log("I am UI Devloper.");
}
role();

console.log("--------Step 2---------------");

function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "First Name:",
    firstName,
    ",",
    "Last Name:",
    lastName,
    ",",
    "College Name:",
    collegeName
  );
}
personalDetails("Pratiksha", "Jaybhaye", "Karmaveer Bhaurao Patil College");

console.log("--------Step 3---------------");

function swapValues(n1, n2) {
  console.log("Before Swap Values:", "n1--->", n1, " n2--->", n2);
  temp = n1;
  n1 = n2;
  n2 = temp;
  console.log("After Swap Values:", "n1--->", n1, " n2--->", n2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("--------Step 4---------------");

function addThreeValues(a, b, c) {
  console.log("Given Three values are :", "a =", a, "b =", b, "c =", c);
  var result = a + b + c;
  console.log("Result is:", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
