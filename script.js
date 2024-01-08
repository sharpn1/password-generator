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
  var length = parseInt(prompt("Please enter the length of the password (between 8 and 128 characters):"));
  if(length < 8 || length > 128) {
      alert("Invalid length. Please choose characters that are between 8 and 128.");
      return null;
  }

  var lower = confirm("Would you like lowercase letters?");
  var upper = confirm("Would you like uppercase letters?");
  var numeric = confirm("Would you like numerical characters?");
  var special = confirm("Would you like special characters?");

  if(!lower && !upper && !numeric && !special) {
    alert("You must select at least one character type.");
    return null;
}

return { length, lower, upper, numeric, special };
}

// Function for getting a random element from an array
function getRandom(arr) {
  let chars;
  switch(type) {
      case 'lower':
          chars = 'abcdefghijklmnopqrstuvwxyz';
          break;
      case 'upper':
          chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
      case 'numeric':
          chars = '0123456789';
          break;
      case 'special':
          chars = '$@%&*@%+\\/!#$^?:,)(}{][~-_.';
          break;
  }
  return chars[Math.floor(Math.random() * chars.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if(options === null) {
      return;
  }
  /*var length = parseInt(prompt("Please enter the length of the password (between 8 and 128 characters):"));
  if(length < 8 || length > 128) {
      alert("Invalid length. Please choose characters that are between 8 and 128.");
      return;
  }

  var lower = confirm("Would you like lowercase letters?");
  var upper = confirm("Would you like uppercase letters?");
  var numeric = confirm("Would you like numerical characters?");
  var special = confirm("Would you like special characters?");*/

  let password = '';
  let types = [];
  if(lower) types.push('lower');
  if(upper) types.push('upper');
  if(numeric) types.push('numeric');
  if(special) types.push('special');

  // Ensure at least one character of each selected type is included
  password += getRandomChar(types[Math.floor(Math.random() * types.length)]);
  for(let i = 1; i < length; i++) {
      password += getRandomChar(types[Math.floor(Math.random() * types.length)]);
  }

  // Shuffle the password to ensure randomness
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  alert(`Your generated password is: ${password}`);
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
