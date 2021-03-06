/**
 * @YourOrderPlease
 * Your task is to sort a given string. Each word in the String will contain a single number.
 * This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input String is empty, return an empty String.
 * The words in the input String will only contain valid consecutive numbers.
 * For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
 */

// my solution
const sortByWordNumber = (a, b) => a.replace(/^\D+/g, '') > b.replace(/^\D+/g, '');
const order = words => words.split(' ').sort(sortByWordNumber).join(' ');

// top #1 solution
function topSolution1(words) {

  return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}

// top #2 solution
const reg = /\d/;

function topSolution2(words) {
  return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg)
}
