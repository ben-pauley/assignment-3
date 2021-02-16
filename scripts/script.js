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

function isNumberAndValidLength(length) 
{
    return !isNaN(length) && length > 7 && length < 129;
};

function getPasswordLength() 
{
    var validLength = false;
    do 
    {
        var pwLength = prompt("How many characters would you like in your password?");
  
        pwLength = parseInt(pwLength);
  
        if (isNumberAndValidLength(pwLength)) 
        {
            validLength = true;
            continue;
        }
        alert("Please enter a number between 8 and 128.");

    } while (validLength === false);
  
    return pwLength;
};

function getCharacterTypes() 
{
    do 
    {
        var minimumSelected = false;
  
        var lower = confirm("Would you like lower case characters in your password?");
        var upper = confirm("Would you like upper case characters in your password?");
        var numbers = confirm("Would you like numbers in your password?");
        var special = confirm("Would you like special characters in your password?");
  
        if (lower || upper || numbers || special) 
        {
            minimumSelected = true;
            continue;
        }
  
        alert("You must select at least one type of character for your password.");
    
    } while (minimumSelected === false);

    return {lower, upper, numbers, special};
};

function getCharacterCodes(from, to) 
{
    let nums = [];
    for (let i = from; i <= to; i++) 
    {
        nums.push(i);
    }
    return nums;
};

function createPassword(length, characters)
{
    let password = "";
  
    for (var i = 1; i <= length; i++) 
    {
        password += characters[Math.floor(Math.random() * (characters.length - 1))];
    }
  
    return password;
};

function generatePassword() 
{
    const passwordLength = getPasswordLength();
    const {lower, upper, numbers, special} = getCharacterTypes();
  
    let characterCodes = [];

    characterCodes = [
        ...characterCodes,
        lower ? getCharacterCodes(97, 122) : null
    ];
    characterCodes = [
        ...characterCodes,
        upper ? getCharacterCodes(65, 90) : null
    ];
    characterCodes = [
        ...characterCodes,
        numbers ? getCharacterCodes(48, 57) : null
    ];
    characterCodes = [
        ...characterCodes,
        special ? getCharacterCodes(33, 47) : null
    ];
    characterCodes = [
        ...characterCodes,
        special ? getCharacterCodes(58, 64) : null
    ];
    characterCodes = [
        ...characterCodes,
        special ? getCharacterCodes(91, 96) : null
    ];
  
    const availableCharacters = characterCodes
        .filter((c) => Boolean(c))
        .flat()
        .map((c) => String.fromCharCode(c));
  
    const password = createPassword(passwordLength, availableCharacters);
    return password;
};