function selectionSort(arr) {
  const swap = (i, j) => {[arr[i], arr[j]] = [arr[j], arr[i]]}
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (i !== min) swap(i, min)
  }
  return arr
}

module.exports = selectionSort;