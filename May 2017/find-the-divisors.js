/**
 * @FindTheDivisors
 * Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself).
 * If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).
 */

// my solution
function divisors(int) {
  const intDivisors = [];
  for (let i = 2; i < int; i++) {
    if ((int % i) === 0) intDivisors.push(i);
  }

  return intDivisors.length ? intDivisors : `${int} is prime`;
}

// top solutions
function top1Solution(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
}

function top2Solution(integer) {
  for(var div = [], i = 2; i < integer; i++) if (integer % i == 0) div.push(i);
  return div.length > 0 ? div : integer + " is prime";
}
