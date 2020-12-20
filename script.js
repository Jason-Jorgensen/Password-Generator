// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


//Character Types
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", ">", "?", "@", "[", "\\", "]","^", "_", "`", "{", "|", "}", "~"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function writePassword() {
  do {
    var passwordLength = parseInt(prompt("Enter the desired length of your password between 8-128 characters."));
    if (passwordLength===null) {
      break;
    }
  } while (
    passwordLength < 8 || passwordLength > 128);

  do {  
  var lowerCase = confirm("Would you like to include lowercase character types?");
  var upperCase = confirm("Would you like to include uppercase character types?");
  var numeric = confirm("Would you like to include numeric character types?");
  var specialChar = confirm("Would you like to include spceical character types?");
  if (lowerCase === false && upperCase === false && numeric === false && special === false) {
   alert("You must select at least one character type.")
  }
  } while ( 
    lowerCase === false && upperCase === false && numeric === false && upperCase === false);
  
  //Creating a password character array
  var passwordCharacters = []
  
  if (lowerCase) {
    passwordCharacters = passwordCharacters.concat(letters);
  }

  if (upperCase) {
    passwordCharacters = passwordCharacters.concat(alphaLetters);
  }

  if (numeric) {
    passwordCharacters = passwordCharacters.concat(number);
  }

  if (specialChar) {
    passwordCharacters = passwordCharacters.concat(special);
  }
 
  //String that will contain the requested random password
  var randomPassword = ""

  for (var i = 0; i < passwordLength; i++){
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]; 
  }
  // console.log(passwordCharacters)
  // console.log(randomPassword)
  return randomPassword;

}


function generatePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// var password = generatePassword();
// var password = writePassword();
// var passwordText = document.querySelector("#password");
// passwordText.value = password;






