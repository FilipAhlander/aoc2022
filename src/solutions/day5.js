import { data, testData } from "../input/day5.js";

function getData(rawData) {
  let instructions;
  let input;
  [input, instructions] = data.split('\n\n');
  input = input.split('\n');
  const matris = [];

  for (const line of input) {
    if (line.substring(0, 3) === ' 1 ') {
      break;
    }

    for (let i = 1; i <= line.length; i+=4) {

      if (line[i] === ' ') continue;
      else {
        const n = Math.round(i / 4);
        while (matris.length <= n) {
          matris.push([]);
        }
        matris[n].push(line[i])
      }
    }
  }
  
  for (let i = 0; i < matris.length; i++) {
    matris[i] = matris[i].reverse();
  }

  instructions = instructions
    .split('\n').map(row => row
      .split(' ')
      .filter(n => n
        .match(/[0-9]+/g))
        .map(n => parseInt(n)));
  return { matris, instructions }
}

function getVisibleCrates(matris) {
  let str = '';
  for (let i = 0; i < matris.length; i++) {
    str += matris[i].at(-1);
  }
  return str;
}

const solutionA = () => {
  const { matris, instructions } = getData(data);
  // console.log(matris);
  for (const instruction of instructions) {
    const [amount, from, to] = instruction;
    for (let i = 0; i < amount; i++) {
      matris[to - 1].push(...matris[from - 1].pop());
    }
  }
  console.log(getVisibleCrates(matris));
}

const solutionB = () => {
  const { matris, instructions } = getData(data);

  for (const instruction of instructions) {
    const [amount, from, to] = instruction;
    matris[to - 1].push(...matris[from - 1].splice(-amount));
  }
  console.log(getVisibleCrates(matris));
}

export { solutionA, solutionB };