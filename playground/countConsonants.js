const countConsonants = function (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  const arrayOfString = string.split('');
  for (let i = 0; i <= arrayOfString.length; i++) {
    if (!vowels.includes(arrayOfString[i])) {
      count++;
    }
  }
  return count;
};
const c = countConsonants('i love you Mom');
console.log(c);
