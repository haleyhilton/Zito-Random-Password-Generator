
//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);
// Various Arrays 
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSymbols;
var confirmNumericCharacter;
var confirmUpper;
var confirmLower;

// How many characters prompt
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Choose any length between 8 - 128 characters"));

  // Loop if answer is not between 8 - 128
  while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Oops - let's try again! Please choose a number between 8 and 128 characters");
      var confirmLength = (prompt("How many characters would you like your password to contain? Choose any length between 8 - 128 character."));
      } 
    //  console.log(confirmLength);
      
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}