/**
 * @param {string} s
 * @return {string}
 */

const map = {
  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'd',
  '5': 'e',
  '6': 'f',
  '7': 'g',
  '8': 'h',
  '9': 'i',
  '10#': 'j',
  '11#': 'k',
  '12#': 'l',
  '13#': 'm',
  '14#': 'n',
  '15#': 'o',
  '16#': 'p',
  '17#': 'q',
  '18#': 'r',
  '19#': 's',
  '20#': 't',
  '21#': 'u',
  '22#': 'v',
  '23#': 'w',
  '24#': 'x',
  '25#': 'y',
  '26#': 'z'
}

var freqAlphabets = function(s) {
  var result = '';
  const strArr = Array.from(s);
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i + 2] ==='#') {
      var char = strArr[i] + strArr[i + 1] + strArr[i + 2];
      result += map[char];
      i += 2;
    } else {
      result += map[strArr[i]];
    }
  }
  return result;
};

var result;
result = freqAlphabets('12345678910#');
console.assert(result === 'abcdefghij', 'Should decrypt both regular integers, and double digits.');
result = freqAlphabets('25#');
console.assert(result === 'y', 'Should decrypt a single double digit num');
result = freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#');
console.assert(result === 'abcdefghijklmnopqrstuvwxyz', 'Should decrypt all letters');