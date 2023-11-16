/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var buildTree = function (preorder, inorder) {
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return solve(preorder, inorder, 0, 0, inorder.length - 1, map);
};

var solve = function (preorder, inorder, preStart, inStart, inEnd, map) {
  if (inStart > inEnd || preStart > preorder.length - 1) {
    return null;
  }
  let rootIndex = map.get(preorder[preStart]);
  let node = new TreeNode(preorder[preStart]);

  node.left = solve(
    preorder,
    inorder,
    preStart + 1,
    inStart,
    rootIndex - 1,
    map
  );

  node.right = solve(
    preorder,
    inorder,
    preStart + (rootIndex - inStart) + 1,

    rootIndex + 1,
    inEnd,
    map
  );

  return node;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
