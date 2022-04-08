
//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Password Arrays 
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?"];
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

//console.log(number, symbols, lowercase, uppercase);


function generatePassword() {
  let confirmLength = (prompt("How many characters would you like your password to contain? Choose any length between 8 - 128 characters"));

  // If answer is not between 8 - 128
  while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Oops - let's try again! Make sure to choose a character length between 8 - 128.");
      confirmLength = (prompt("How many characters would you like your password to contain? Choose any length between 8 - 128 character."));
      } 

      var confirmSymbols = confirm("Click OK to include symbols");
      var confirmNumbers = confirm("Click OK to include numbers");    
      var confirmLower = confirm("Click OK to include lowercase letters");
      var confirmUpper = confirm("Click OK to include uppercase letters");
      
      // If no parameters are chosen
      while(confirmUpper === false && confirmLower === false && confirmSymbols === false && confirmNumbers === false) {
        alert("You must choose at least one parameter");
        confirmSymbols = confirm("Click OK to include symbols");
        confirmNumbers = confirm("Click OK to include numbers");    
        confirmLower = confirm("Click OK to include lowercase letters");
        confirmUpper = confirm("Click OK to include uppercase letters");   
    }

      var passwordCharacters = []

      if (confirmSymbols) {
      passwordCharacters = passwordCharacters.concat(symbols)
     }

      if (confirmNumbers) {
      passwordCharacters = passwordCharacters.concat(number)
      }

     if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lowercase)
      }

      if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(uppercase)
     }

      //console.log(passwordCharacters)

      
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
