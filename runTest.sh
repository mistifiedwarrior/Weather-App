echo "\nmodule.exports = { countVowels }" >> countVowels.js
echo "\nmodule.exports = { countConsonants }" >> countConsonants.js
echo "\nmodule.exports = { isPalindrome }" >> isPalindrome.js

curl https://raw.githubusercontent.com/mistifiedwarrior/Weather-App/shivi/runAllTest.js > runAllTest.js

node runAllTest.js
