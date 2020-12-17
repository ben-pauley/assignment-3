// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
    askForNumOfChar();
    whatCharacters();


};

function askForNumOfChar()
{ // Asks the user how many characters they would like and ensures the input is between 8 and 128
    do
    {
        var correctInput = false;
        var pwLength = prompt("How many characters would you like in your password?");
        pwLength = parseInt(pwLength);
        if ((isNaN(pwLength)) || (pwLength < 8) || (pwLength > 128))
        {
            alert("Please enter a number between 8 and 128.")
        }
        else if ((!isNaN(pwLength)) && (pwLength >= 8) && (pwLength <= 128))
        {
            correctInput = true;
        }
    } 
    while (correctInput == false);
};

function whatCharacters()
{ // Asks the user what kinds of characters they would like and ensures at least one type is selected
    do
    {
        var oneSelected = false;

        var lowerCase = confirm("Would you like lower case characters in your password?");
        var upperCase = confirm("Would you like upper case characters in your password?");
        var numbers = confirm("Would you like numbers in your password?");
        var specChar = confirm("Would you like special characters in your password?");

        if (lowerCase || upperCase || numbers || specChar)
        {
            oneSelected = true;
        }
        else
        {
            alert("You must select at least one type of character for your password.")
        }
    }
    while (oneSelected == false);
};