
console.log(`-----Step 1 -----`);
function squareOfWordLength(n1,n2,n3) {
   var n1result = n1.length;
   console.log(`Length of word is: ${n1result}`);
   var SquareLength = (n1result * n1result)
   console.log(`Square Length: ${SquareLength}`);
    
}
squareOfWordLength("JavaScript")
squareOfWordLength("Google Chrome")
squareOfWordLength("Developer Smart")

console.log(`-----step 2-----`);
function givenString(){
    var string = "I am Angular Developer"
    var resultlength = string.length;
   console.log(`Length of word is: ${resultlength}`);

   var resultword = string.split(" ").length;
   console.log(`Total Number of Words Available: ${resultword}`);

   var divide = resultlength/resultword;
   console.log(`Division: ${divide}`);

   var multiply = resultlength*resultword;
   console.log(`Multiply: ${multiply}`);
}
givenString();


