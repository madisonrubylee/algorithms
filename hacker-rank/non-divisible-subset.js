// Given a set of distinct integers, print the size of a maximal subset of  where the sum of any  numbers in  is not evenly divisible by .

// Example

// One of the arrays that can be created is . Another is . After testing all permutations, the maximum length solution array has  elements.

// Function Description

// Complete the nonDivisibleSubset function in the editor below.

// nonDivisibleSubset has the following parameter(s):

// int S[n]: an array of integers
// int k: the divisor
// Returns

// int: the length of the longest subset of  meeting the criteria
// Input Format

// The first line contains  space-separated integers,  and , the number of values in  and the non factor.
// The second line contains  space-separated integers, each an , the unique values of the set.

// => 정수 집합에서 두 수의 합이 특정 수 k로 나누어 떨어지지 않는 최대 부분집합의 크기를 찾으시긔

function simpleNonDivisibleSubset(k, S) {
  let remainders = new Array(k).fill(0);

  // 나머지 계산
  S.forEach((number) => {
    remainders[number % k]++;
  });

  let maxSubsetSize = remainders[0] > 0 ? 1 : 0; // 나머지가 0인 경우, 하나만 포함 가능
  //k를 기준으로 대칭
  for (let i = 1; i <= k / 2; i++) {
    if (i === k - i) {
      // (k)가 짝수이고 나머지가 (k/2)인 경우, 하나만 포함 가능
      maxSubsetSize += remainders[i] > 0 ? 1 : 0;
    } else {
      maxSubsetSize += Math.max(remainders[i], remainders[k - i]);
    }
  }
  return maxSubsetSize;
}
