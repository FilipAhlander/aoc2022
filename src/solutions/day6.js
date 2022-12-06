import { data } from '../input/day6.js';

const testData = 'bvwbjplbgvbhsrlpgdmjqwftvncz';

function foundDuplicates(substr) {
  const hash = {};
  for (const c of substr) {
    if (hash[c]) return true;
    hash[c] = 'snus';
  }
  return false;
}

function solve(input, n) {
  for (let i = 0; i+n < input.length; i++) {
    const str = input.substr(i, n);
    if (!foundDuplicates(str)) return i+n;
  }
}

const solutionA = () => {
  console.log(solve(data, 4));
}

const solutionB = () => {
  console.log(solve(data, 14));
}

export { solutionA, solutionB }