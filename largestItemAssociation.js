// O: Largest Item Association [item4, item5, item6] as an Array
// I: an Array of PairStrings that inlude of pairs of strings
// C:
// E: there can be PairStrings with only 1 string, this counts as a size of 1.
//    There cannot be null PairStrings, all will at least have one

var PairString = function(first, second) {
    this.first = first;
    this.second = second;
}

var Graph = function(nodes) {
  this.nodes = nodes;
}

var createGraphFromItemAssociation = function(itemAssociation) {
  var nodes = {};
  for (var i = 0; i < itemAssociation.length; i++) {
    //This value is what the node's value will be
    var value = itemAssociation[i].first;

    //check if child node already exists
    var childNode;
    // if child does not exist already in nodes,
    // create new node from second value
    // otherwise, childNode is set equal to the node that exists in nodes hashtable
    if (!nodes[itemAssociation[i].second]) {
      childNode = new Node(itemAssociation[i].second)
      nodes[childNode.value] = childNode;
    } else {
      childNode = nodes[itemAssociation[i].second];
    }

    // Declare all children of the new node
    var children = [childNode];


    // If this node is new, simply add it to our nodes
    // If it exists already, just add the childNode to the children of the existing node
    if (!nodes[value]) {
      var node = new Node(value, children);
      nodes[value] = node;
    } else {
      nodes[value].children.push(childNode);
    }
  }

  return new Graph(nodes);
}

var Node = function(value, children) {
  this.value = value;
  this.children = children || [];
}

var largestItemAssociation = function(itemAssociation) {

}

var itemAssociation = [new PairString('item1', 'item2'), new PairString('item1', 'item5'),new PairString('item3', 'item4'), new PairString('item4', 'item5')];

var graph = createGraphFromItemAssociation(itemAssociation);
var result = graph.nodes['item1'];