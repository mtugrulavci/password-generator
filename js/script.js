const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
var characters = "";
var password = "";

var askCriteria = function() {
    var passwordLowercase = window.confirm("Do you want lowercase in the password?" );
    var passwordUppercase = window.confirm("Do you want uppercase in the password?") ;
    var passwordNumbers = window.confirm("Do you want numbers in the password?") ;
    var passwordSpeacialCharacter = window.confirm("Do you want special characters in the password?") ;
    if(passwordLowercase === false && passwordUppercase===false &&passwordNumbers===false&&passwordSpeacialCharacter===false){
        return  window.alert("you have to select one condition"), askCriteria();
    }
    if (passwordLowercase){
        characters = characters + alphaLower;
    }
    if (passwordUppercase){
        characters = characters + alphaUpper;
    }
    if (passwordNumbers){
        characters = characters + numbers;
    }
    if (symbols){
        characters = characters +symbols;
    }

};

var passwordGenerate = function(){
    var passwordLenght = Number(window.prompt("Please state length of the password- it should be greater than 7 and lower than 129") );
    if (passwordLenght < 8 || passwordLenght>128|| passwordLenght=== '' || isNaN(passwordLenght) ) {
        window.alert("please enter a valid number");
        askLenght();
    }
    askCriteria();
    for (var i = 0; i < passwordLenght; i++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return window.console.log (password);  
};

passwordGenerate();