var generateBtn = document.querySelector(“#generate”);

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE
  //declare criteria as an object
  const lowerCase = “abcdefghijklmnopqrstuvwxyz”;
  const uppercase = “ABCDEFGHIJKLMNOPQRSTUVWXYZ”;
  const numeric = “0123456789";
  const special = “!@£$%&*?+=#():%:“