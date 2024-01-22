console.log(`-------Step 1: Palindrome--------`);

function checkPalindrome(word) {

    const arrayValues = word.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(word == reverseString) {
        console.log(`${word}:It is a palindrome`);
    }
    else {
        console.log(`${word}:It is a Not palindrome`);
    }
}
checkPalindrome("MADAM");
checkPalindrome("DAD");
checkPalindrome("HELLO");

console.log(`-------Step 2: Anagram--------`);

function checkAnagram(num1, num2) {
    let newString1 = num1.toLowerCase().replace('').split('').sort().join('')
    let newString2 = num2.toLowerCase().replace('').split('').sort().join('')

    return (newString1 === newString2);
  }
  const result=checkAnagram("Silent","Listen");
  console.log(`Silent,Listen is Anagram : ${result}`);
  const result1=checkAnagram("Hello","Word");
  console.log(`Hello ,Word is Anagram : ${result1}`);
  const result2=checkAnagram("Such","much");
  console.log(`Such,much is Anagram : ${result1}`);
