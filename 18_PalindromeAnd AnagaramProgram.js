

//MADAM

const isPalindrome = function (word){
    console.log(word);
    }
    const result = isPalindrome ("MADAM");
    console.log(`Given Words MADAM is Palindrome or not ${result}`);
    
    //ANAGRAM
    // 'heart' & 'earth' are Anagram
    const str1 = 'heart'; //sort in ascending order ==>  aehrt
    const str2 = 'earth';//sort in ascending order ==>  aehrt
    // const array = str1.split("");
    // console.log(array);
    // array.sort();
    // const resultStr1 = array.join("");
    // console.log(array);
    // console.log(resultStr1);

    //Shortcut Method 

    const resultStr1 = str1.split("").sort().join("");
    const resultStr2 = str2.split("").sort().join("");

    console.log(resultStr1==resultStr2? true : false);

const arrayNums = [21,11,40,25,9,61,50];
const arrayPrime = [];
for (const element of arrayNums) {
    if ((element)) {
        arrayPrime.push(element);
    }
}
console.log(arrayNums);

