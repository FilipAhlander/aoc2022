import { data, testData } from "../input/day8.js";

function solveA(input) {

  const isVisibleFromRight = (num, i, j, rows) => {
    j++;
    while (j < rows[0].length) {
      if (num <= rows[i][j]) return false;
      j++;
    }
    return true;
  }
  const isVisibleFromLeft = (num, i, j, rows) => {
    j--;
    while (j >= 0) {
      if (num <= rows[i][j]) return false;
      j--;
    }
    return true;
  }
  const isVisibleFromTop = (num, i, j, rows) => {
    i--;
    while (i >= 0) {
      if (num <= rows[i][j]) return false;
      i--;
    }
    return true;
  }
  const isVisibleFromBottom = (num, i, j, rows) => {
    i++;
    while (i < rows.length) {
      if (num <= rows[i][j]) return false;
      i++;
    }
    return true;
  }

  const rows = input
    .split('\n')
    .map(row => row
      .split('')
      .map((n) => parseInt(n)));
  let length = rows[0].length;
  let height = rows.length;
  const outerTrees = length * 2 + height * 2 - 4;
  let sum = 0;
  for (let i = 1; i < length - 1; i++) {
    for (let j = 1; j < height - 1; j++) {
      const num = rows[i][j];
      if (isVisibleFromRight(num, i, j, rows) ||
        isVisibleFromLeft(num, i, j, rows) ||
        isVisibleFromBottom(num, i, j, rows) ||
        isVisibleFromTop(num, i, j, rows)) {
          sum++;
        }
    }
  }
  console.log(sum + outerTrees);
}

function leftScore(num, i, j, rows) {
  let score = 0;
  while (j > 0) {
    j--;
    score++;
    if (num <= rows[i][j]) return score;
  }
  return score;
}
function rightScore(num, i, j, rows) {
  let score = 0;
  while (j < rows[0].length - 1) {
    j++;
    score++;
    if (num <= rows[i][j]) return score;
  }
  return score;
}
function topScore(num, i, j, rows) {
  let score = 0;
  while (i > 0) {
    i--;
    score++;
    if (num <= rows[i][j]) return score;
  }
  return score;
}
function bottomScore(num, i, j, rows) {
  let score = 0;
  while (i < rows[0].length - 1) {
    i++;
    score++;
    if (num <= rows[i][j]) return score;
  }
  return score;
}

function solveB(input) {
  const rows = input
  .split('\n')
  .map(row => row
    .split('')
    .map(n => parseInt(n)));
  let highestScore = Number.NEGATIVE_INFINITY;
  for (let i = 1; i < rows.length - 1; i++) {
    for (let j = 1; j < rows[0].length - 1; j++) {
      const num = rows[i][j];
      const tempScore = leftScore(num, i, j, rows) * rightScore(num, i, j, rows) * bottomScore(num, i, j, rows) * topScore(num, i, j, rows)
      if (tempScore > highestScore) highestScore = tempScore;
    }
  }
  console.log(highestScore);
}

const solutionA = () => {
  solveA(data);
}

const solutionB = () => {
  solveB(data)
}

export { solutionA, solutionB }