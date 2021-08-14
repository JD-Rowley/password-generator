var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var number = ["1","2","3","4","5","6","7","8","9","0"];

var symbol = ["!","@","#","$","%","^","&","*","(",")",",",".","?",";",":","-","_"];

function generatePassword() { 
  var length = prompt("Between 8 and 128, how many characters are your password?");
    if(length < 8 || length > 128) {
      alert("Password length is invalid. It must be between 8 and 128 characters.");
      return "Invalid Input";
    }
  
  var lowerCaseConfirm = confirm("Would you like to use lowercase letters?");

  var upperCaseConfirm = confirm("Would you like to use uppercase letters?");

  var numberConfirm = confirm("Would you like to use numbers?");

  var symbolConfirm = confirm("Would you like to use symbols?");
  
    var atLeastOne = false;
    if(lowerCaseConfirm === true || upperCaseConfirm === true || numberConfirm === true || symbolConfirm === true) {
      atLeastOne = true;
    }

    if(atLeastOne === false) {
      alert("Character type selection invalid. At least one must be selected.");
      return "Invalid Input";
    }

   var allCharacters = [];
     if(lowerCaseConfirm === true) allCharacters = allCharacters.concat(lowerCase);
     if(upperCaseConfirm === true) allCharacters = allCharacters.concat(upperCase);
     if(numberConfirm === true) allCharacters = allCharacters.concat(number);
     if(symbolConfirm === true) allCharacters = allCharacters.concat(symbol);

     var newPassword = "";
      for(i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * (allCharacters.length - 0 + 1) + 0);

        newPassword = newPassword + allCharacters[randomIndex];
      }

      console.log(newPassword);

      return newPassword;
}

var passwordLength = function() {
    var length = "";
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
