function insertionSort(arr) {
  const swap = (i, j) => {[arr[i], arr[j]] = [arr[j], arr[i]]}
  for(let i = 0; i < arr.length-1; i++) {
    if (arr[i] < arr[i+1]) continue;
    swap(i, i+1)
    let j = i - 1
    while (j >= 0) {
      if (arr[j] < arr[j+1]) break
      swap(j, j+1)
      j--
    }
  }
  return arr
}

module.exports = insertionSort;