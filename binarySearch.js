/**
 * Find the index of a given value from the input array.
 * @param {number[]} input - ordered array containing numeric values.
 * @param {number} value - the value to search for.
 */
function binarySearch (input, value) {
  let len = input.length
  let x = Math.floor(len / 2)
  let left = 0
  if (value < input[0] || value > input[len - 1]) {
    return -1
  }
  while (value !== input[x]) {
    // console.log(value, x, input[x]) // not safe with large inputs
    if (value < input[x]) {
      x -= Math.floor((x - left + 1) / 2)
    } else if (value > input[x]) {
      left = x
      x += Math.floor((len - left + 1) / 2)
    } else if (x <= left) {
      return -1
    }
  }
  return x
}

console.log(binarySearch([], 10)) // -1
console.log(binarySearch([1, 3, 6, 10, 15], 10)) // 3
console.log(binarySearch([1, 3, 6, 10, 15], 0)) // -1

let array = []
let i
for (i = 0; i < 1000000; i++) {
  array.push(Math.random())
}
array.push(0.99)
let time1
let time2
console.log('large array generated... now sorting (may take a while)...')
time1 = window.performance.now()
array.sort() // sorts in-place
time2 = window.performance.now()
console.log('array prepared in ' + (time2 - time1) + ' milliseconds. Searching for 0.99:')
time1 = window.performance.now()
console.log(binarySearch(array, 0.99)) // probably -1
time2 = window.performance.now()
console.log('b-search finished in ' + (time2 - time1) + ' milliseconds.')
