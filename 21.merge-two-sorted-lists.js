/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

  if (!l1 || !l2) {
    if (!l1 && !l2) {
      return null;
    } else if (!l1) {
      return l2;
    } else {
      return l1;
    }
  }

  var trailingNode;
  var node1;
  var node2;
  var returnList;

  if (l1.val > l2.val) {
    trailingNode = l2;
    node1 = l2;
    node2 = l1;
    returnList = l2;
  } else {
    trailingNode = l1;
    node1 = l1;
    node2 = l2;
    returnList = l1;
  }

  while (node2) {
    if (node2.val <= node1.val) {
      if (trailingNode === node1) {
        node1 = node1.next;
        var temp = new ListNode(node2.val);
        trailingNode.next = temp;
        temp.next = node1;
        trailingNode = trailingNode.next;

      } else {
        var temp = new ListNode(node2.val);
        trailingNode.next = temp;
        temp.next = node1;
        trailingNode = temp;
      }
      node2 = node2.next;
    } else {
      if (node1.next) {
        trailingNode = node1;
        node1 = node1.next;
      } else {
        // if at the end of the list, just add it to the end
        node1.next = node2;
        break;
      }
    }
  }
  return returnList;
};
// @lc code=end

var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

var result = mergeTwoLists(list1, list2);
console.log(result);

list1 = new ListNode(2);
list2 = new ListNode(1);

result = mergeTwoLists(list1, list2);
console.log(result);