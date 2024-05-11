// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

/*
 * First Approach
 */
// function lonelyinteger(a) {
//     // Write your code here
//     const unique = new Map();

//     if (a.length === 1) return a[0]
//     for(let i =0; i<a.length; i++) {
//         const item = a[i];
//         if (unique.has(item)) {
//             unique.delete(item)
//             continue;
//         } else {
//             unique.set(item, item)
//         }

//     }

//     return unique.values().next().value;

// }

function lonelyinteger(a) {
  const freq = new Map();

  for (const num of a) {
    if (freq.has(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }

  for (const [num, count] of freq) {
    if (count === 1) {
      return num;
    }
  }
}
