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
  if (!head || !head.next) return head;

  var rotated;
  var tail = head;
  var length = 1;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  if (k %= length) {
    tail.next = head;
    for (var i = 0; i < length - k; i++) {
      tail = tail.next
    };
    head = tail.next;
    tail.next = null;
  }

  return head;
};

// var list = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))));
// var result = rotateRight(list, 2);
// var values = [4, 5, 1, 2, 3];
// var index = 0;

// while (result.next) {
//   console.log(result.val);
//   console.assert(result.val === values[index]);
//   result = result.next;
//   index++;
// }

var list = ListNode(0, ListNode(1, ListNode(2)));
var result = rotateRight(list, 4);
for (i = 0; i < 3; i++) {
  console.log(result.val);
  result = result.next;
}