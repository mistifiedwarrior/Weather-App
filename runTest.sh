cat countVowels.js > tempCountVowels.js
cat countConsonants.js > tempCountConsonants.js
cat isPalindrome.js > tempIsPalindrome.js

echo "
module.exports = { countVowels }" >> tempCountVowels.js
echo "
module.exports = { countConsonants }" >> tempCountConsonants.js
echo "
module.exports = { isPalindrome }" >> tempIsPalindrome.js

curl https://raw.githubusercontent.com/mistifiedwarrior/Weather-App/shivi/runAllTest.js > runAllTest.js

node runAllTest.js

rm tempCountVowels.js tempCountConsonants.js tempIsPalindrome.js runAllTest.js
