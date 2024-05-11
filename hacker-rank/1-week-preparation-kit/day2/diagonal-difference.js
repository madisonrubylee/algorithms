// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

function diagonalDifference(arr) {
  let n = arr.length; // Assuming arr is a square matrix, n is the size of the matrix.
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let i = 0; i < n; i++) {
    leftToRightSum += arr[i][i]; // 왼 => 오
    rightToLeftSum += arr[i][n - 1 - i]; //오 => 왼
  }

  const difference = Math.abs(leftToRightSum - rightToLeftSum);
  return difference;
}
