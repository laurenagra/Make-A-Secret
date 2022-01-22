// Assignment Code
var generateBtn = document.querySelector("#generate");


//Create my generate password function
function generatePassword(){
  console.log("You clicked the button!");
  //possible inclusions
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


  //empty arrays
  var resultArray = [];
  var userArray = [];

// I. Prompt the user for password criteria
//     a. pasword length 8 < 128
  var click = window.prompt("How many characters would you like?")
  var length = Number(click);
  console.log(length);

  if (length < 8){
    alert ("Please choose a longer password length!")
    click = window.prompt("Please choose a length between 8 and 128 characters!");
  }
  else if (length > 128) {
    alert ("Please choose a shorter password length!")
    click = window.prompt("Please choose a length between 8 and 128 characters!");
  }
  else {
    alert ("You chose " + length + " characters");
  }
//     b. lowercase, uppercase, numbers, special characters

  var uppercases = confirm("Would you like to use uppercase letters?");

  if (uppercases) {
    alert ("Your password will contain uppercase letters");
  } 
  else {
    alert ("Your password will not contain uppercase letters");
  };

  var lowercases = confirm("Would you like to use lowercase letters?");
  if (lowercases) {
    alert ("Your password will contain lowercase letters");
  } else {
    alert ("Your password will not contain lowercase letters");
  };
  
  var numbers = confirm("Would you like to use numbers?");
  if (numbers) {
    alert ("Your password will contain numbers");
  } else ("Your passworkd will not contain numbers");

  var characters = confirm("Would you like to use special characters?"); 
  if (characters) {
    alert ("Your password will contain symbols");
  } else ("Your password will not contain symbols");

  while (!uppercases && !lowercases && !numbers && !characters) {
    alert("You must select at least one character type!");
    uppercases = confirm("Would you like to use uppercase letters?");
    lowercases = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    characters = confirm("Would you like to use special characters?");
  }


// Generate password based on criteria
if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < length; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
}
  console.log(userArray.join(""));
  return userArray.join("") ;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
