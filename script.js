// Array of special characters to be included in password
var characterLength = 8;
var choiceArr = [];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  choiceArr = [];
  characterLength = parseInt(prompt("Please enter the length of the password (between 8 and 128 characters):"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Error! Please choose numbers that are between 8 and 128.");
      return false;
  }

  if (confirm("Would you like lowercase letters?"));
  choiceArr = choiceArr.concat(lowerCasedCharacters); {
  }

  if (confirm("Would you like uppercase letters?"));
  choiceArr = choiceArr.concat(upperCasedCharacters); {
  }

  if (confirm("Would you like numerical characters?"));
  choiceArr = choiceArr.concat(numericCharacters); {
  }
  
  if (confirm("Would you like special characters?"));
  choiceArr = choiceArr.concat(specialCharacters); {
  }
  return true;
}

// Function for getting a random element from an array
function getRandom(arr) {
  /*password = password.split('').sort(() => Math.random() - 0.5).join('');

  alert(`Your generated password is: ${password}`);*/
  }
 

// Function to generate password with user input
function generatePassword() {
  var password = ""; 
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password;
}
  /*var options = getPasswordOptions();
  if(options === null) {
      return;*/
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPasswordOptions();

  if (correctPrompts) {
  var newPassword = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = newPassword;
  } else {
      passwordTest.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
