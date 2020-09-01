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
  var result = new ListNode();
  var head = result;


  while (l1 && l2) {
    if (l1.val <= l2.val) {
      result.next = l1;
      l1 = l1.next;
    } else {
      result.next = l2;
      l2 = l2.next;
    }
    result = result.next;
  }

  if (!l1) {
    result.next = l2;
  } else if (!l2) {
    result.next = l1;
  }

  return head.next;
};

// @lc code=end

// var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// var list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// var result = mergeTwoLists(list1, list2);
// console.log(result);

// list1 = new ListNode(2);
// list2 = new ListNode(1);

// result = mergeTwoLists(list1, list2);
// console.log(result);