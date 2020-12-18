// Assignment Code
var generateBtn = document.querySelector("#generate");
//Character Types
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
  var upperCase = confirm("Would you like to include spceical character types?");
  if (lowerCase === false && upperCase === false && numeric === false && upperCase === false) {
   alert("You must select at least one character type.")
  }
  } while ( 
    lowerCase === false && upperCase === false && numeric === false && upperCase === false );
  

  
  
 
  



  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);