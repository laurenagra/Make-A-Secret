var alphaUp = "abcdefghijklmnopqrstuvwxyz";
var alphaLow = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";



// Assignment Code
var generateBtn = document.querySelector("#generate");


//Create my generate password function
function generatePassword(){
  console.log("You clicked the button!");

  var passwordLenth = 8 < 128;
// I. Prompt the user for password criteria
//     a. pasword length 8 < 128
  prompt("How many characters would you like?")
//     b. lowercase, uppercase, numbers, special characters
// II. Validate the input
// III. Generate password based on criteria



//Display password to the page
  return ("Generated Password will go here!")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
