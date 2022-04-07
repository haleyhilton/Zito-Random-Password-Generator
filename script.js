
//Assignment Code + Event Listener to prompt questions when button pushed
//document.querySelector("#generate").addEventListener("click", writePassword);
// Password Arrays 
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.log(number, symbols, lowercase, uppercase);
/*
var confirmLength = "";
var confirmSymbols;
var confirmNumbers;
var confirmUpper;
var confirmLower;


function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain? Choose any length between 8 - 128 characters"));

  // If answer is not between 8 - 128
  while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Oops - let's try again! Please choose a number between 8 and 128 characters");
      var confirmLength = (prompt("How many characters would you like your password to contain? Choose any length between 8 - 128 character."));
      } 

      var confirmSymbols = confirm("Click OK to confirm if you would like to include symbols");
      var confirmNumbers = confirm("Click OK to confirm if you would like to include numbers");    
      var confirmLower = confirm("Click OK to confirm if you would like to include lowercase letters");
      var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase letters");
      
      // If no parameters are chosen
      while(confirmUpper === false && confirmLower === false && confirmSymbols === false && confirmNumbers === false) {
        alert("You must choose at least one parameter");
        var confirmSymbols = confirm("Click OK to confirm if you would like to include symbols");
        var confirmNumbers = confirm("Click OK to confirm if you would like to include numbers");    
        var confirmLower = confirm("Click OK to confirm if you would like to include lowercase letters");
        var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase letters");   
    } 

      var passwordCharacters = []

      if (confirmSymbols) {
      passwordCharacters += (symbols)
     }

      if (confirmNumbers) {
      passwordCharacters += (number)
      }

     if (confirmLower) {
      passwordCharacters += (lowercase)
      }

      if (confirmUpper) {
      passwordCharacters += (uppercase)
     }

      console.log(passwordCharacters)

      
      var randomPassword = ""
      
      for (let i = 0; i < confirmLength; i++) {
        randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
 
    return randomPassword;
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
*/