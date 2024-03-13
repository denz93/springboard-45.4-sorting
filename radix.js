function radixSort(nums) {
  const maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

function getDigit(num, exp) {
  return Math.floor(num % (10 ** (exp + 1)) / (10 ** exp))
}

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  if (nums.length === 0) return 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i])
  }
  return digitCount(max)
}

module.exports = {radixSort, getDigit, digitCount, mostDigits};