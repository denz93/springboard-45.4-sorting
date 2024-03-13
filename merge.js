function merge(a1, a2) {
  const sorted = []
  let i = 0, j = 0
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      sorted.push(a1[i++])
    } else {
      sorted.push(a2[j++])
    }

  }
  if (i < a1.length) {
    sorted.push(...a1.slice(i))
  }
  if (j < a2.length) {
    sorted.push(...a2.slice(j))
  }
  return sorted
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

module.exports = { merge, mergeSort};