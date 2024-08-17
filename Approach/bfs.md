### BFS

이진 트리를 순회하여 각 레벨에서의 평균 값을 구하기 위해, 일반적으로 너비 우선 탐색(BFS)을 사용함
BFS는 큐를 사용하여 레벨 단위로 노드를 처리하는 데 유용하고, 각 레벨의 노드를 탐색하고 평균을 계산하여 결과를 배열에 저장할 수 있음

If you don't push the root into the queue initially, the function won't have any nodes to start processing, and it will not enter the while loop. Here's a step-by-step breakdown of what would happen:

## leetcode - 637

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *//**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    if (!root) return [];

    const avg = [];
    const queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift(); //<-- This is where node 3 (and others) are "removed" from the queue

            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        avg.push(levelSum / levelSize);
    }

    return avg;
};
```

Queue: [3] -> [9, 20] -> [15, 7] -> []
Result: [3, 14.5, 11]

```
InitialQueue:
     [3]3
    /   \
   9     20
        /  \
       15   7


Process:
-Level1: Queue[3]-> Process3-> Queue[9, 20]-> Average[3]
-Level2: Queue[9, 20]-> Process9, 20-> Queue[15, 7]-> Average[3, 14.5]
-Level3: Queue[15, 7]-> Process15, 7-> Queue[]-> Average[3, 14.5, 11]
```

The lines if (node.left) queue.push(node.left); and if (node.right) queue.push(node.right);
are essential because they allow the algorithm to explore and process each node in the tree level by level.

By enqueuing the children of the current node, the BFS traversal ensures that after the current level is fully processed, the next level is ready to be processed. Without these lines, the algorithm wouldn't be able to traverse the entire tree, making it impossible to calculate the averages for each level.
