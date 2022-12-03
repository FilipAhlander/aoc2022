import {  data, testData } from "../input/day3.js"

function intersect(arr1, arr2) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  let interSectResult = [];

  for (const c of setB) {
    if (setA.has(c)) interSectResult.push(c)
  }

  return interSectResult;
}

function intersectFor3Arrays(arr1, arr2, arr3) {
  const setA = new Set(arr1);
  const setB = new Set(arr2);
  const setC = new Set(arr3);

  let interSectResult = [];

  for (const c of setC) {
    if (setA.has(c) && setB.has(c)) interSectResult.push(c);
  }

  return interSectResult;
}

function flatten(arr) {
  return [].concat.apply([], arr);
}

const priority = '-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const solutionA = () => {
  let items = [];

  for (let row of data.split('\n')) {
    const [compA, compB] = [row.substring(0, row.length / 2), row.substring(row.length / 2)];
    items.push(intersect(compA, compB));
  }
  items = flatten(items);
  const sumOfPrios = items.map(n => priority.indexOf(n)).reduce((a, b) => a + b, 0);
  console.log(sumOfPrios)
}

export const solutionB = () => {
  const rows = data.split('\n');
  let items = [];
  for (let i = 0; i < rows.length; i+=3) {
    let compA = rows[i], compB = rows[i+1], compC = rows[i+2];
    items.push(intersectFor3Arrays(compA, compB, compC));
  }
  items = flatten(items);
  const sumOfPrios = items.map(n => priority.indexOf(n)).reduce((a, b) => a + b, 0);

  console.log(sumOfPrios);
}