// n의 모든 인수를 오름차순으로 정렬하고, k번째 인수를 반환
// n의 인수 개수가 k보다 적으면 -1 반환
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  const factors = [];
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  if (factors.length < k) {
    return -1;
  } else {
    return factors[k - 1];
  }
};
