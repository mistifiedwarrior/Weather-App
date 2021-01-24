cat countVowels.js >> tempCountVowels.js
cat countConsonants.js >> tempCountConsonants.js
cat isPalindrome.js >> tempIsPalindrome.js

echo "\nmodule.exports = { countVowels }" >> tempCountVowels.js
echo "\nmodule.exports = { countConsonants }" >> tempCountConsonants.js
echo "\nmodule.exports = { isPalindrome }" >> tempIsPalindrome.js

curl https://raw.githubusercontent.com/mistifiedwarrior/Weather-App/shivi/runAllTest.js > runAllTest.js

node runAllTest.js

rm tempCountVowels.js tempCountConsonants.js tempIsPalindrome.js runAllTest.js runTest.sh