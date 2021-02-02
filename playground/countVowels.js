const a = 'our country, india got independence on 15 August 1947';

const countVowels = function (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  const arrayOfString = string.split('');
  for (let i = 0; i <= arrayOfString.length; i++) {
    if (vowels.includes(arrayOfString[i])) {
      count++;
    }
  }
  return count;
};

const b = countVowels(a);
console.log(b);
