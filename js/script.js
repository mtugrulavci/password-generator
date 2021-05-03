var passwordGenerate = function(){
    var passwordLenght = window.prompt("Please state length of the password- it should be greater than 5 and lower than 13");
    var userNumEntry = Number(passwordLenght);

    if (  userNumEntry < 5)  {
        window.alert("please enter a valid number");
        passwordGenerate();

    }

};
passwordGenerate();