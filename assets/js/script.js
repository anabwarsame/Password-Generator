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
const isLowercase = confirm(“Do you want to use lowercase?“);
  const isUppercase = confirm(“Do you want to use uppercase?“);
  const isNumeric = confirm(“Do you want to use numeric?“);
  const isSpecial = confirm(“Do you want to use special?“);

  if (!isLowercase && !isUppercase && !isNumeric && !isSpecial) {
    alert("please choose atleast one of the options");
    return;
  }

    //return function
  //if statement for return


  const choices = [];

  if (isLowercase) {
    choices.push(lowerCase);
  }
  if (isUppercase) {
    choices.push(uppercase);
  }
  if (isNumeric) {
    choices.push(numeric);
  }
  if (isSpecial) {
    choices.push(special);
  }

  // generate random password
  for (let i = 0; i < 10; i++) {
    // get random choice index
    const randomChoiceIndex = Math.floor(Math.random() * choices.length);
    // get random characters
    const randomCharacters = choices[randomChoiceIndex];
    password += randomCharacters.charAt(
      Math.floor(Math.random() * randomCharacters.length)
    );
  }
  return password;
}