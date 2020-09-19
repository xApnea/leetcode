/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start

// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};


/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  var result = new Node(0, null, null);
  var resultHead = result;

  var list = head;
  var map = new Map();
  while (list) {
    var node = new Node(list.val, list.next, list.random)
    map.set(list, node);
    result.next = node;
    list = list.next;
    result = result.next;
  }
  result = resultHead.next;

  while(result) {
    result.random = map[result.random] ? map[result.random] : null;
    result = result.next;
  }

  return resultHead.next;
};

var createList = function(array) {
  var list = new Node(0, null, null);
  var head = list;
  var nodeArray = []
  for (var i = 0; i < array.length; i++) {
    list.next = new Node(array[i][0]);
    nodeArray.push(list.next);
    list = list.next;
  }
  list = head;

  for (var i = 0; i < array.length; i++) {
    var index = array[i][1];
    if (index === null) {
      list.next.random = index;
    } else {
      list.next.random = nodeArray[index];
    }
    list = list.next;
  }

  return head.next;
}

var list = createList([[7,null],[13,0],[11,4],[10,2],[1,0]]);
var copy = copyRandomList(list);
// @lc code=end

