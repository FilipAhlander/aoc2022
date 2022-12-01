import { input } from '../input/day1.js';

// const array = (input) => input
//   .split('\n\n')
//   .map(row => row.split('\n')
//   .map(n => parseInt(n)))
//   .reduce((a, b) => a + b, 0)
//   .sort((a, b) => b - a);

const sum = (arr) => arr.reduce((a, b) => a + b, 0)
const array = (input) => input
    .split('\n\n')
    .map(row => row
      .split('\n')
      .map(n => parseInt(n))
      .reduce((a, b) => a + b, 0)
    )
    .sort((a, b) => b - a);

    export const solutionAB = () => {
      // const sortedAndSummarized = array(input)
      console.log(array(input)[0]);
      console.log(sum(array(input).slice(0,3)));

    }
// export const solutionA = () => {
//   const nums = array(input);
//   let highest = -1;
//   let sum = 0;

//   for (const n of nums) {
//     if (!n) {
//       if (sum > highest) highest = sum;
//       sum = 0;
//     }
//     else sum += n;
//   }

//   console.log(highest);
// }

// export const solutionB = () => {
//   const nums = array(input);
//   let highest = -1;
//   let sum = 0;
//   const sums = [];

//   for (const n of nums) {
//     if (!n) {
//       sums.push(sum);
//       sum = 0;
//     }
//     else sum += n;
//   }

//   sums.sort((a, b) => b - a);
//   console.log(sums[0] + sums[1] + sums[2]);
// }