/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
 */

// @lc code=start

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val)

  var recursiveSearchInsert = function(node, val) {
    if (val < node.val) {
      if (!node.left) {
        node.left = new TreeNode(val);
        return;
      } else {
        recursiveSearchInsert(node.left, val);
      }
    } else if (val > node.val) {
      if (!node.right) {
        node.right = new TreeNode(val);
        return;
      } else {
        recursiveSearchInsert(node.right, val);
      }
    }
    return;
  }
  recursiveSearchInsert(root, val);
  return root;
};
// @lc code=end

// var tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));
// var result = insertIntoBST(tree, 5);

// var result = insertIntoBST(undefined, 3);
// console.log(result);
