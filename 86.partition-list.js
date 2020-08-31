/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 */

// @lc code=start
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  // iterate through list
  // find x
  var node = head;
  if (node === null) return null;

  while (node !== null) {
    if (node.val === x) break;
    else if (node.next === null) return head;
    else node = node.next;
  }
  // once x is hit, start testing if node.next.val is < x
  var prevNode = node;
  node = node.next;
  while (node) {
    if (node.val <= x) {
      //  if yes. remove node, and reconnect
      prevNode.next = node.next;
      // node is our 'temp' node
      var node2 = head;
      // iterate list a second time, testing where the new value falls. Find where it is < next.value, and insert
      while (node2.next) {
        if (node.val >= node2.val && node.val < node2.next.val) {
          var tail = node2.next;
          node2.next = node;
          node.next = tail;
          break;
        } else {
          node2 = node2.next;
        }
      }
      node = prevNode.next;
    } else {
      prevNode = node;
      node = node.next;

    }
  }
  return head;
};

// var list = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
// 1->4->3->2->5->2

// partition(list, 3);

// var list = new ListNode(1);
// partition(list, 0);

// [1,1], 1

var list = new ListNode(1, new ListNode(1));
partition(list, 1);

// @lc code=end

