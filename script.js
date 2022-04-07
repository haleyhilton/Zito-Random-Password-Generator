//make variables that store lower and uppercase letters
function generatePassword(){

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=";
var passwordLength = 16;
let password = "";

for (var i=0; i<passwordLength; i++){
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber,randomNumber+1);
  }

document.getElementById("password").value = password
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  //return a randomized password when you run this password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
const btn = document.querySelector('.btn');
generateBtn.addEventListener("click", writePassword);



//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);
// Various Arrays 
var number = ["0123456789"];
var specialChar = ["!%&,*+-.<>?~"];
var alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

