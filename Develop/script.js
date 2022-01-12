var alphaLow = "abcdefghijklmnopqrstuvwxyz";
var alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";



// Assignment Code
var generateBtn = document.querySelector("#generate");


//Create my generate password function
function generatePassword(){
  console.log("You clicked the button!");

// I. Prompt the user for password criteria
//     a. pasword length 8 < 128
  var click = window.prompt("How many characters would you like?")

if (click < 8){
  return ("Please choose a longer password length!")
}
else if (click > 128) {
  return ("Please choose a shorter password length!")
}
else alert ("You chose " + click + " characters");
//     b. lowercase, uppercase, numbers, special characters

var low = confirm("Would you like to include lowercase letters?")
if (low) {

}
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
