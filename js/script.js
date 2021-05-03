

var passwordGenerate = function(){
    var passwordLenght = Number(window.prompt("Please state length of the password- it should be greater than 7 and lower than 129") );


    if (passwordLenght < 8 || passwordLenght>128|| passwordLenght=== '' || isNaN(passwordLenght) ) {
        window.alert("please enter a valid number");
        passwordGenerate();
    }
    var passwordLowercase = Number(window.confirm("Do you want lowercase in the password?") );
    var passwordUppercase = Number(window.confirm("Do you want uppercase in the password?") );
    var passwordNumbers = Number(window.confirm("Do you want numbers in the password?") );
    var passwordSpeacialCharacter = Number(window.confirm("Do you want special characters in the password?") );




};
passwordGenerate();