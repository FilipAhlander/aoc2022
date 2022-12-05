import { data, testData } from "../input/day4.js";

const duplicatesFound = (left, right) => {
  let hash = {};
  for (let i = left[0]; i <= left[1]; i++) hash[i] = 1;
  for (let i = right[0]; i <= right[1]; i++) if(hash[i]) return true;
  return false;
}

const run = (input) => {
  const rows = input.split('\n').map(row => row.split(','));
  let pairs = 0;
  let bPairs = 0;
  for (const row of rows) {
    let [left, right] = row;
    left = left.split('-').map(n => parseInt(n));
    right = right.split('-').map(n => parseInt(n));
    if ((left[0] >= right[0] && left[1] <= right[1]) ||
      (right[0] >= left[0] && right[1] <= left[1])) pairs++;
    if (duplicatesFound(left, right)) bPairs++;
  }
  console.log(pairs);
  console.log(bPairs);
}

export function solutionAB() {
  run(data);
}