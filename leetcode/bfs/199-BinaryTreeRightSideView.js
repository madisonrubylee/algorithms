// Given the root of a binary tree, imagine yourself standing on the right side of it,
//return the values of the nodes you can see ordered from top to bottom.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const rightSideView = function (root) {
  if (!root) return [];

  let queue = [root];
  let arr = []; // 오른쪽 뷰를 저장할 배열

  //모든 노드를 탐색
  while (queue.length > 0) {
    let size = queue.length;

    let lastNodeValue;

    for (let i = 0; i < size; i++) {
      let node = queue.shift(); // 큐의 첫번째 노드
      lastNodeValue = node.val; // 마지막 노드값을 업데이트

      // 자식 노드 있으면 추가
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    arr.push(lastNodeValue);
  }

  return arr;
};
