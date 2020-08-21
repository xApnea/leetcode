// Definition for singly-linked list.
function ListNode(val, next) {
  var node = {};
  node.val = (val===undefined ? 0 : val)
  node.next = (next===undefined ? null : next)
  return node;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  var rotated;
  var tail = head;

  while (tail.next) {
    tail = tail.next;
  }
  tail.next = head;

  for (var i = 1; i <= k; i++) {
    if (i === k) {
      tail.next = null;
      return head;
    }
    head = head.next;
    tail = tail.next;
  }
};

var list = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))));
var result = rotateRight(list, 2);
var values = [2, 3, 4, 5, 1];
var index = 0;

while (result.next) {
  console.assert(result.val === values[index]);
  result = result.next;
  index++;
}