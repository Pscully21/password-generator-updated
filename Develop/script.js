// Assignment code here >>
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}
var passwordLength = 0;

function askUser(passwordLength) {
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter a password length from 8 to 128 characters");
  }
  useLowerCase = confirm ("Would you like to use lower case characters?");
  useUpperCase = confirm ("Would you like to use Upper case characters?");
  useSpecialChar = confirm ("Would you like to use Special characters?");
  useNumeric = confirm ("Would you like to use Numbers?");

  return passwordLength;
}

function getChoice() {
  while (useLowerCase == false && useUpperCase == false && useSpecialChar == false && useNumeric == false) {
    alert("This password generator requires you to select at least one criteria to create a password")
    askUser();
  }
  var chars = "";
  if (useLowerCase == true) {
    chars += "zxcvbnmasdfghjklqwertyuiop";
  }
  if (useUpperCase == true) {
    chars += "ZXCVBNMASDFGHJKLQWERTYUIOP";
  }
  if (useSpecialChar == true) {
    chars += "~!@#$%^&*()_-=+}{/|\.?:;<>`',";
  }
  if (useNumeric == true) {
    chars += "1234567890";
  }
  return chars;
}
function generatePassword() {
  var password = "";
  var passwordLength = window.prompt("Enter the length you would like your password to be keeping it between 8 and 128 characters");
  passwordLength = askUser(passwordLength);
  var chars = getChoice();
  for (i = 0; i < passwordLength; i++) {
    var generateRandom = Math.floor(Math.random()*chars.length);
    password += chars.substring(generateRandom, generateRandom+1);
  }
  return password;
}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);