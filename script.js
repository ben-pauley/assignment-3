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
    do
    { // Asks the user how many characters they would like and ensures the input is between 8 and 128
        var correctInput = false; // default to false
        var pwLength = prompt("How many characters would you like in your password?");
        pwLength = parseInt(pwLength); // ensure the input is an integer
        if ((isNaN(pwLength)) || (pwLength < 8) || (pwLength > 128))
        { // if the user has not entered a number between 8 and 128
            alert("Please enter a number between 8 and 128.")
        }
        else if ((!isNaN(pwLength)) && (pwLength >= 8) && (pwLength <= 128))
        { // if the user has entered a number between 8 and 128, correctInput is set to true and the do while loop ends
            correctInput = true;
        }
    }
    while (correctInput === false);


    do
    { // Asks the user what kinds of characters they would like and ensures at least one type is selected
        var oneSelected = false; //default to false

        var lowerCase = confirm("Would you like lower case characters in your password?");
        var upperCase = confirm("Would you like upper case characters in your password?");
        var numbers = confirm("Would you like numbers in your password?");
        var specChar = confirm("Would you like special characters in your password?");

        if (lowerCase || upperCase || numbers || specChar)
        { // if the user has selected at least one character option, oneSelected is set to true and the do while loop ends
            oneSelected = true;
        }
        else
        { // if the user has not selected at least one chacter option, it loops back round
            alert("You must select at least one type of character for your password.")
        }
    }
    while (oneSelected === false);


    var pwArray = []; // declare empty array to store all the possible characters the user selects

    for (i = 97; i <= 122; i++)
    {
        if (lowerCase === true)
        {
            pwArray = pwArray.concat(String.fromCharCode(i));
        }
    }

    for (i = 65; i <= 90; i++)
    {
        if (upperCase === true)
        {
            pwArray = pwArray.concat(String.fromCharCode(i));
        }
    }

    for (i = 48; i <= 57; i++)
    {
        if (numbers === true)
        {
            pwArray = pwArray.concat(String.fromCharCode(i));
        }
    }

    for (i = 33; i <= 47; i++)
    {
        if (specChar === true)
        {
            pwArray = pwArray.concat(String.fromCharCode(i));
        }
    }

    for (i = 58; i <= 64; i++)
    {
        if (specChar === true)
        {
            pwArray = pwArray.concat(String.fromCharCode(i));
        }
    }

    for (i = 91; i <= 96; i++)
    {
        if (specChar === true)
        {
            pwArray = pwArray.concat(String.fromCharCode(i));
        }
    }

    var finalPwArray = []; // declare empty array to store the final password

    for (var i = 1; i <= pwLength; i++)
    { // for loop iterates equal to the number characters the user wants in their password, so if they wanted 10 characters, it would iterate 10 times
        finalPwArray = finalPwArray.concat(pwArray[Math.floor(Math.random() * (pwArray.length-1))]); //each time this loops, one random character is added to the array containing the final password
    }

    var finalPwStr = finalPwArray.join(''); // removes commas and spaces from array so that it appears as one continuous string
    return finalPwStr; //returns the final randomly generated password according to user's criteria
};

function addCharToArray(min, max, type)
{
    for (i = min; i <= max; i++)
    {
        if (type === true)
        {
            pwArray = pwArray.concat(String.fromCharCode(i));
        }
    }
};