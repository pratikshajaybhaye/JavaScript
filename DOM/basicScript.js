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

console.log(`-----Chnaging CSS Property -------`);
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
