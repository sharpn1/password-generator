# password-generator
Module 5 Challenge: Password Generator
This project is a simple JavaScript-based password generator that allows users to customize the length and types of characters in their password.

Features
Customizable password length (between 8 and 128 characters)
Option to include lowercase letters, uppercase letters, numeric characters, and special characters
Validation to ensure at least one character type is selected
Generation of a random password and display in an alert box
How to Use
To use this password generator, simply click the "Generate Password" button. You will then be prompted to enter the length of the password and select the types of characters you want to include. After answering these prompts, a password will be generated and displayed in an alert box.

Code Structure
The main functions in this project are:

getRandomChar(type): Generates a random character of a given type (lowercase, uppercase, numeric, or special).
getPasswordOptions(): Prompts the user for the length of the password and the types of characters to include, and validates the inputs.
generatePassword(): Calls getPasswordOptions(), generates a password based on the user's choices, and displays it in an alert box.
These functions are attached to a button click event in the HTML.

Tests
Tests for this project are not currently included. However, you can test the functionality by running the project in a web browser and interacting with the password generator.

Contributing
Contributions to this project are welcome. Please feel free to submit a pull request or report an issue.

License
This project is licensed under the MIT License.