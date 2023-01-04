// node
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// iterative
const levelOrder = (root) => {
  if (!root) return [];

  const results = [];
  const queue = [root];

  while (queue.length > 0) {
    const currentLength = queue.length;
    const currentLevel = [];

    for (let i = 0; i < currentLength; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      currentLevel.push(node.val);
    }

    results.push(currentLevel);
  }

  return results;
};

// recursion

var levelOrder_ = function (root) {
  let arr = [];

  const traverseNode = (root, index) => {
    if (!root) return;
    if (!arr[index]) {
      arr.push([]);
    }
    arr[index].push(root.val);
    traverseNode(root.left, index + 1);
    traverseNode(root.right, index + 1);
  };
  traverseNode(root, 0);
  return arr;
};
