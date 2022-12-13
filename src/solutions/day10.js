import { data, testData } from "../input/day10.js";

function solveA(input) {
  const interesting = [20, 60, 100, 140, 180, 220]
  const rows = input.split('\n');
  let x = 1;
  let op = 0;
  let ans = 0;
  for (const row of rows) {
    const [left, right] = row.split(' ');
    if (right) {
      const num = parseInt(right)
      op++;
      if (interesting.includes(op)) {
        ans += op * x;
      }
      op++;
      if (interesting.includes(op)) {
        ans += op * x;
      }
      x += num;
    }
    else {
      op++;
      if (interesting.includes(op)) {
        ans += op * x;
      }
    }
  }
  console.log(ans) // -1
}

function solveB(input) {
  const isHash = (x, screenX) => {
    return (x === screenX || x === screenX - 1 || x === screenX + 1);
  }
  let x = 1, screenX = -1, line = '';
  const screen = [];
  const rows = input.split('\n');

  for (const row of rows) {
    const [left, right] = row.split(' ');
    screenX++;
    line += isHash(x, screenX) ? 'O' : ' ';
    if (screenX === 39) {
      screen.push(line);
      line = '';
      screenX = -1;
    }
    if (right) {
      const num = parseInt(right);
      screenX++;
      line += isHash(x, screenX) ? 'O' : ' ';
      if (screenX === 39) {
        screen.push(line);
        line = '';
        screenX = -1;
      }
      x += num;
    }
  }
  for (let row of screen) {
    console.log(row);
  }
}

const solutionA = () => {
  solveA(data);
}

const solutionB = () => {
  solveB(data);
}

export { solutionA, solutionB }