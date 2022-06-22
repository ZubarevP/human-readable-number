const little = [
  "zero", "one", "two", "three", "four",
  "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen",
  "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];

const middle = [
  "twenty", "thirty", "forty", "fifty",
  "sixty", "seventy", "eighty", "ninety"
];



module.exports = function toReadable(n) {
  let result = [];
  let div_res = Math.floor(+n / 100);
  let remainder = +n % 100;

  div_res > 0 ? result.push(`${little[div_res]} hundred`) : 0;

  n % 100 == 0 && n != 0 ? 0 :
    remainder < 20 ?
      result.push(little[remainder]) :
      remainder % 10 != 0 ?
        result.push(
          `${middle[`${remainder}`.split('')[0] - 2]} ${little[`${remainder}`.split('')[1]]}`
        ) : result.push(`${middle[`${remainder}`.split('')[0] - 2]}`);

  return result.join` `;
}

































/*
 * const little = [
  "zero", "one", "two", "three", "four",
  "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen",
  "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];

const middle = [
  "twenty", "thirty", "forty", "fifty",
  "sixty", "seventy", "eighty", "ninety"
];

const big = ["", " thousand", " million", " billion"];

function hund(n) {
  let result = [];
  let div_res = Math.floor(+n / 100);
  let remainder = +n % 100;

  div_res > 0 ? result.push(`${little[div_res]} hundred`) : 0;

  remainder < 20 ?
    result.push(little[remainder]) :
    remainder % 10 != 0 ?
      result.push(
        `${middle[`${remainder}`.split('')[0] - 2]} ${little[`${remainder}`.split('')[1]]}`
      ) : result.push(`${middle[`${remainder}`.split('')[0] - 2]}`);

  return result.join` `;
}

function thirds(arr) {
  return arr.map((v, i) => v + big[i]).reverse().join(' ');
}

module.exports = function toReadable(number) {
  let num_str = `${number}`.split('').reverse();
  let arr = [];
  for (let i = 0; i < num_str.length; i += Math.min(3, num_str.length - i)) {
    arr.push(hund(num_str.slice(i, i + Math.min(3, num_str.length - 1)).reverse().join('')));
  }
  return thirds(arr);
  return hund(number);
} */
