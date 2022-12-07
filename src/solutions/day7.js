import { data, testData } from "../input/day7.js";

function solve(rows, solution) {
  rows = rows.split('\n');
  const currFolders = [];
  const hash = {};

  for (const line of rows) {
    const command = line.split(' ');
    if (command[0] === '$') {
      if (command[1] === 'cd') {
        if (command[2] === '..') currFolders.pop()
        else currFolders.push(command[2]);
      }
    }
    else if(command[0].match(/[0-9]+/g)) {
      const num = parseInt(command[0]);
      for (let i = 0; i < currFolders.length; i++) {
        // / a e
        const folderName = currFolders.slice(0, i+1).join('');
        if (!hash[folderName]) hash[folderName] = num;
        else hash[folderName] += num;
      }
    }
  }
  let sum = 0;
  for (const key in hash) {
    const num = hash[key];
    if (num <= 100000) {
      sum += num;
    }
  }
  if (solution === 'a') return sum;
  if (solution === 'b') return hash;
}

const solutionA = () => {
  const sum = solve(data, 'a');
  console.log(sum);
}

const solutionB = () => {
  const hash = solve(data, 'b');
  const totalDiskSpace = 70000000;
  const neededDiskSpace = 30000000;
  const freeDiskSpace = totalDiskSpace - hash['/'];
  const missingDiskSpace = neededDiskSpace - freeDiskSpace;
  let smallestFittingFolder = Number.POSITIVE_INFINITY;
  for (const key in hash) {
    const num = hash[key]
    if (num >= missingDiskSpace && num < smallestFittingFolder) smallestFittingFolder = num;
  }
  console.log(smallestFittingFolder);
}

export { solutionA, solutionB }