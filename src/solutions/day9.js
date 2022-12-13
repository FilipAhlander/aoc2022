import { testData, data } from "../input/day9.js";

const directions = {
  'R': [1, 0],
  'L': [-1, 0],
  'D': [0, -1],
  'U': [0, 1]
}

function touching(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1
}

function solveA(input) {
  let hx = 0, hy = 0, tx = 0, ty = 0;
  const visited = {};
  const rows = input.split('\n');
  for (let row of rows) {
    let [operation, num] = row.split(' ');
    num = parseInt(num);
    const [dx, dy] = directions[operation];
    for (let i = 1; i <= num; i++) {
      hx += dx;
      hy += dy;
      if (!touching(hx, hy, tx, ty)) {
        const diffX = hx === tx ? 0 : (hx - tx) / Math.abs(hx - tx);
        const diffY = hy === ty ? 0 : (hy - ty) / Math.abs(hy - ty);

        tx += diffX;
        ty += diffY;
      }
      const str = `${tx} ${ty}`;
      visited[str] = 1;
    }
  }
  console.log(Object.keys(visited).length)
}



function solveB(input) {
  const knots = [];
  for (let i = 1; i <= 10; i++) {
    const knot = [0, 0];
    knots.push(knot);
  }

  let hx = 0, hy = 0, tx = 0, ty = 0;
  function move(dx, dy) {
    knots[0][0] += dx;
    knots[0][1] += dy;

    for (let i = 1; i < 10; i++) {
      [hx, hy] = knots[i - 1];
      [tx, ty] = knots[i];
      if (!touching(hx, hy, tx, ty)) {
        const diffX = hx === tx ? 0 : (hx - tx) / Math.abs(hx - tx);
        const diffY = hy === ty ? 0 : (hy - ty) / Math.abs(hy - ty);

        tx += diffX;
        ty += diffY;
      }

      knots[i] = [tx, ty];
    }
  }
  
  const visited = {};
  const rows = input.split('\n');
  for (let row of rows) {
    let [operation, num] = row.split(' ');
    num = parseInt(num);
    const [dx, dy] = directions[operation];
    for (let i = 1; i <= num; i++) {
      hx += dx;
      hy += dy;
      move(dx, dy);
      const [x, y] = knots.at(-1);
      const str = `${x} ${y}`;
      visited[str] = 1;
    }
  }
  console.log(Object.keys(visited).length)
}

const solutionA = () => {
  solveA(data);
}

const solutionB = () => {
  solveB(data);
} 

export { solutionA, solutionB }