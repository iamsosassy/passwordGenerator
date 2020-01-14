// Assignment Code

var generateBtn = document.querySelector("#generate");
//var chars = ("abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890");
var allChars = ''
var upperCase = confirm("Do you want uppercase letters?");
var lowerCase = confirm("Do you want lowercase letters?");
var wantSymbols = confirm("Do you want symbols?");
var numbers = confirm("Do you want numbers?");
var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*()-+<>";


if (upperCase === true) {
  allChars += upperChars
}
if (lowerCase === true) {
  allChars += lowerChars
}
if (numbers === true) {
  allChars += numberChars
}
if (wantSymbols === true) {
  allChars += symbols
}
//console.log('here is all chars we are gnna generate pass with', allChars)

// Write password to the #password input
function generatePassword(passwordLength) {

  //var allChars = numberChars + upperChars + lowerChars + symbols;

  var randPasswordArray = Array(passwordLength);

  if (numbers === true) {
    randPasswordArray[1] = numberChars;
  }
  if (upperCase === true) {
    randPasswordArray[1] = upperChars;
  }
  if (lowerCase === true) {
    randPasswordArray[2] = lowerChars;
  }
  if (wantSymbols === true) {
    randPasswordArray[3] = symbols;
  }

  console.log('randomPassArray before fill', randPasswordArray)
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  console.log('randompassarray after fill', randPasswordArray);
  return shuffleArray(randPasswordArray.map(function (x) {
    console.log('what is x!!!', x);
    return x[Math.floor(Math.random() * x.length)]
  })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//alert(generatePassword(12));
document.getElementById('password').innerHTML = generatePassword(12)

{
  // Add event listener to generate button
  generateBtn.addEventListener("click", generatePassword);
}
