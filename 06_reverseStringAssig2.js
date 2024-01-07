function reverseString(word) {
    let result = "";
for (let index = word.length-1; index >=0; index--) {
     result = result + word.charAt(index); 
    //  result = result.concat(word.charAt(index));
}
console.log(`Reverse string is: ${result}`);
}

reverseString("Hard work always pays back");

reverseString("Soon I will be Angular IT Champ")
