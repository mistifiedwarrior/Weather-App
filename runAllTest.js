const { countVowels } = require('./tempCountVowels');
const { countConsonants } = require('./tempCountConsonants');
const { isPalindrome } = require('./tempIsPalindrome');

let score = 0;
let total = 0;

const assert = (actual, expected) => {
  if (actual === expected) score++;
  total++;
};

assert(countVowels('cyst'), 0);
assert(countVowels('Hello'), 2);
assert(countVowels('This is A sentence'), 6);

assert(countConsonants('AB'), 1);
assert(countConsonants('abc'), 2);
assert(countConsonants('B B B'), 3);

assert(isPalindrome('a'), true);
assert(isPalindrome('abba'), true);
assert(isPalindrome('ab'), false);
assert(isPalindrome('A a'), true);

console.log(`Your score:\n\t${score}/${total}`);
