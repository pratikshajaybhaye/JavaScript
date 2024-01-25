console.log(`------getElementById--------`);
const projectName = document.getElementById("projectName");
console.log(projectName);
console.log(projectName.innerHTML);

console.log(`---------getElementsByTagName()------`);
const liElements = document.getElementsByTagName("li");
console.log(liElements[0].innerHTML);
console.log(liElements[1].innerHTML);
console.log(liElements[2].innerHTML);

console.log(`------getElementsByClassName-------`);
const liRoles = document.getElementsByClassName("roles");
console.log(liRoles[0].innerHTML);
console.log(liRoles[1].innerHTML);

console.log(`------querySelector () API with tag or element Name-------`);
const elementP = document.querySelector("p");
console.log(typeof elementP);
console.log(elementP.innerHTML);

console.log(`------querySelector () API with ID -------`);
const elementLiFirst = document.querySelector("#firstRole");
console.log(elementLiFirst.innerHTML); // Select Only One Element  (First Element Return)

console.log(`------querySelector () API with Class -------`);
const elementsRole = document.querySelector(".roles");
console.log(elementsRole.innerHTML); // Select Only One Element   (First Element Return)

console.log(`------querySelector () API with elmet Name or Tag Name -------`);
const elemntsP = document.querySelectorAll("p");
for (const element of elemntsP) {
  console.log(element.innerHTML);
}

console.log(`------querySelector () API with elmet Name or Tag Name -------`);
const elemntsRoles = document.querySelectorAll(".roles");
for (const element of elemntsRoles) {
  console.log(element.innerHTML);
}

console.log(`-----Chnaging Project Name -------`);
const projectElement = document.querySelector("#projectName");
projectElement.innerHTML = "Project Title : College Mangement System";

console.log(`-----Changing CSS Property -------`);
projectElement.style.color = "red";
elementP.style.fontSize = "large";
elementP.style.fontWeight = "bold";

console.log(`----Changing Attribute  -----`);
const elementLink = document.querySelector("#visitLink");
elementLink.setAttribute(
  "href",
  "https://www.w3schools.com/jsref/jsref_foreach.as"
);
elementLink.setAttribute("target", "_self");

console.log(`-----Creating a New Node -------`);
const h2Element = document.createElement('h2');
const textNodeStrength  = document.createTextNode('Personal Strength');
h2Element.appendChild(textNodeStrength);
h2Element.style.color = "cadetBlue";

const strengthElement = document.querySelector('.strength');
strengthElement.appendChild(h2Element);

console.log(`-----Remove or delete a  Node -------`);
const elementRolesList = document.querySelector('#rolesList');
const elementRoles3 = document.querySelector('#role3');
elementRolesList.removeChild(elementRoles3);

// function oneSubmitButtonClick() {
//   console.log(`------oneSubmitButtonClick Clicked----`);
// }

// const submitButton = document.querySelector('#submit');
// submitButton.addEventListener('dblclick',()=>{
//   console.log(`------oneSubmitButtonClick Clicked----`);
// });

const resultValue = document.querySelector('#resultValue');

const submitButton = document.querySelector('#addition');
const fieldOne = document.querySelector('#field-One');
const fieldTwo = document.querySelector('#field-Two');
submitButton.addEventListener('click',() => {
const valueOne = + fieldOne.value;
const valueTwo = + fieldTwo.value;
console.log( valueOne + valueTwo);
const result = valueOne + valueTwo
// alert(`Addition is : ${ valueOne + valueTwo}`)
resultValue.innerHTML= result;
});

// //Modals
// // alert()
// alert("This is Just Information...");
// // prompt()
// const inputValue = prompt("Input field",0);
// console.log(inputValue);
// // confirm()
// confirm("Are you Sure...");