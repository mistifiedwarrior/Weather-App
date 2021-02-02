const isPalindrome = function (string) {
  const arrOfStr = string.split('');
  const newString = string.split('').reverse(string).join('');
  for (i in newString) {
    return newString[i] === arrOfStr[i];
  }
};

console.log(isPalindrome('121'));
