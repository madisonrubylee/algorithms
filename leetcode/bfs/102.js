/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */ /**
 * @param {TreeNode} root
 * @return {number[][]}
 */ var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const levelOrder = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const nodes = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (node !== null) {
        // Check if node is not null
        nodes.push(node.val);

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }

    levelOrder.push(nodes);
  }

  return levelOrder;
};
