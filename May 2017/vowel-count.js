/**
 * @VowelCount
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, and u as vowels for this Kata.
 */

// my solution
const getCount = string => (string.match(/a|e|i|o|u/g) || []).length;

// top solutions
function top1Solution(str) {
  return (str.match(/[aeiou]/ig) || []).length;
}

function top2Solution(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
