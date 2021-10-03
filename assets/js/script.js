var generateBtn = document.querySelector(“#generate”);

function generatePassword() {
  // PLEASE ADD ALL YOUR CODE HERE
  //declare criteria as an object
  const lowerCase = “abcdefghijklmnopqrstuvwxyz”;
  const uppercase = “ABCDEFGHIJKLMNOPQRSTUVWXYZ”;
  const numeric = “0123456789";
  const special = “!@£$%&*?+=#():%:“

  // get password length
  const passwordLength = Number(prompt(“Enter password length:“));
  // if password is a number and within range of 8 and 128 do rest else alert and return “”
  console.log(passwordLength);
  /*
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert(“Please choose a different length?“);
  } else {
    return “”;
  }
*/

if (passwordLength<8 || passwordLength<= 128) {
    alert( "please choose a different length");
    return passwordLength;
} else if (passwordLength>=8 || passwordLength<= 128) {

}

// functions to determine what character user wants to use
