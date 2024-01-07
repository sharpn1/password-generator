// Array of special characters to be included in password
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

  var passwordLengh;
  do {
   passwordLengh= parseInt(prompt("Please enter your password"));
  } if (passwordLengh<8 || passwordLengh >128);

  alert("Please choose atleast 8 characters max numbers of 128");
  return
}
  
if (passwordLengh === null)

  var specialCharacters = confirm ("Would you like a special character?");
  var numericCharacters = confirm ("Would you like a numerical character?");
  var lowerCasedCharacters = confirm ("Would you like lower case character?");
  var upperCasedCharacters = confirm ("Would you like upper case character?");

  var userPasswordOpts = {
    plength: passwordLength,
    opt1: lowercase,
    opt2: uppercase,
    opt3: special,
    opt4: numbers
  }

  return userPasswordOpts;

  //console.log(lowerCasedCharacters);
  //console.log(passwordLengh);


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword(passwordLengh, userPasswordChoice) {
var userPasswordChoice = getPasswordOptions();
  var passwordArr = [];

  if (Object.values(userPasswordChoice)) {
    for (var i = 0; i < userPasswordChoice.plength; i++) {

      var randomNum = Math.floor(Math.random() * 3) + 1;

      switch(randomNum) {
        case 1:
          passwordArr.push(getRandom(lowerCasedCharacters));
        break;
        case 2:
          passwordArr.push(getRandom(upperCasedCharacters));
        break;
        case 3:
          passwordArr.push(getRandom(specialCharacters));
        break;
        case 4:
          passwordArr.push(getRandom(numericCharacters));
        default:
          null;
      }
    }
  }
  return passwordArr.join('');

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);