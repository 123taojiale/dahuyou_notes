/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const len = s.length,
    reg = /[a|A|e|E|i|I|o|O|u|U]/
  let end = len - 1

  s = s.split('')

  if (len === 1) return s.join('')

  for (let i = 0; i < len;) {
    if (i >= end) return s.join('')
    else if (!reg.test(s[i])) i++
    else if (!reg.test(s[end])) end--
    else {
      [s[i], s[end]] = [s[end], s[i]]
      i++
      end--
    }
  }

  return s.join('')
};


/* var test = function (s = ['h', 'e', 'l', 'l', 'o']) {
  [s[1], s[4]] = [s[4], s[1]]
  console.log(s)
}

test() // => [ 'h', 'e', 'l', 'l', 'o' ]

var test = function (s = 'hello') {
  s = s.split('')[s[1], s[4]] = [s[4], s[1]]
  console.log(s)
}

test() // => ['o', 'e']

var test = function (s = 'hello') {
  s = s.split('');
  [s[1], s[4]] = [s[4], s[1]]
  console.log(s)
}

test() // => [ 'h', 'e', 'l', 'l', 'o' ] */