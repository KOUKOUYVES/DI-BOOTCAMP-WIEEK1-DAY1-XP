let sentence ="This dinner is not that bad ! You  wellcook";
let wordNot=sentence.indexOf("not");
let wordBad =sentence.indexOf("bad");
let remplacer = sentence.replace("not that bad", 'good'); /**remplace not that bad en good */

console.log(sentence);/**This dinner is not that bad ! You  wellcook*/

if (wordBad > wordNot) {
    console.log(remplacer);/**This dinner is good ! You  wellcook */
} else {
    console.log(sentence);
}

console.log(wordNot);
console.log(wordBad);