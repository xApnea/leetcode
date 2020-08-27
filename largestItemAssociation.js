// O: Largest Item Association [item4, item5, item6] as an Array
// I: an Array of PairStrings that inlude of pairs of strings
// C:
// E: there can be PairStrings with only 1 string, this counts as a size of 1.
//    There cannot be null PairStrings, all will at least have one

var PairString = function(first, second) {
    this.first = first;
    this.second = second;
}

var largestItemAssociation = function(itemAssociation) {

}

var itemAssociation = [PairString('item1', 'item2'), PairString('item3', 'item4'), PairString('item4', 'item5')];