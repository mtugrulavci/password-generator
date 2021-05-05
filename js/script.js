// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
var characters = "";
var password = "";
var passwordLenght = 0;
var container ="";

var askCriteria = function() {
  var passwordLowercase = window.confirm("Do you want lowercase in the password?" );
  var passwordUppercase = window.confirm("Do you want uppercase in the password?") ;
  var passwordNumbers = window.confirm("Do you want numbers in the password?") ;
  var passwordSpeacialCharacter = window.confirm("Do you want special characters in the password?") ;
  if(passwordLowercase === false && passwordUppercase===false &&passwordNumbers===false&&passwordSpeacialCharacter===false){
    return  window.alert("you have to select one condition"),askCriteria();
  }
    characters = "";
    container = "";
    if (passwordLowercase){
        container = container + alphaLower;
    }
    if (passwordUppercase){
      container = container + alphaUpper;
    }
    if (passwordNumbers){
      container = container + numbers;
    }
    if (passwordSpeacialCharacter){
      container = container +symbols;
    }

for (var k = 0; k < passwordLenght ; k++){
  if (passwordLowercase && k === 0) {
    characters+=  alphaLower.charAt(
      Math.floor(Math.random() * alphaLower.length));
      }

  else if (passwordUppercase&& k===1){
        characters+=alphaUpper.charAt(
          Math.floor(Math.random() * alphaUpper.length))
        }
  else if (passwordNumbers&& k===2){
        characters+=numbers.charAt(
          Math.floor(Math.random() * numbers.length))
        }
  else if (passwordSpeacialCharacter&& k===3){
        characters+=symbols.charAt(
          Math.floor(Math.random() * symbols.length))
          }
  else {
    characters += container.charAt(
      Math.floor(Math.random() * container.length))
       }
  }
  password=characters;
}
  

// Write password to the #password input
function writePassword() {
  password = "";
  passwordLenght = Number(window.prompt("Please state length of the password- it should be greater than 7 and lower than 129") );
  if (passwordLenght < 8 || passwordLenght>128|| passwordLenght=== '' || isNaN(passwordLenght) ) {
    return  window.alert("please enter a valid number"), writePassword();
  }else {
    askCriteria();

  } 
        var passwordText = document.querySelector("#password")
        return passwordText.value = password,window.alert(password); 
}
// Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);

