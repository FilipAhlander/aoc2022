import { input } from '../input/day2.js';

const readInput = (input) => input.split('\n');
const rows = readInput(input);

export const solutionA = () => {
  let hash = {
    'A X': 1 + 3, //rock rock 
    'A Y': 2 + 6, //rock paper
    'A Z': 3 + 0, //rock scissor
    'B X': 1 + 0, //paper rock
    'B Y': 2 + 3, //paper paper
    'B Z': 3 + 6, //paper scissor
    'C X': 1 + 6, //scissor rock
    'C Y': 2 + 0, //scissor paper
    'C Z': 3 + 3, //scissor scissor
  }
  let points = 0;
  for (const row of rows) {
    points += hash[row];
  }
  console.log(points);
}

export const solutionB = () => {
  let hash = {
    'A X': 3 + 0, //rock scissor
    'A Y': 1 + 3, //rock rock
    'A Z': 2 + 6, //rock paper
    'B X': 1 + 0, //paper rock
    'B Y': 2 + 3, //paper paper
    'B Z': 3 + 6, //paper scissor
    'C X': 2 + 0, //scissor paper
    'C Y': 3 + 3, //scissor scissor
    'C Z': 1 + 6, //scissor rock
  }
  let points = 0;
  for (const row of rows) {
    points += hash[row];
  }
  console.log(points);
}