/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, l = 0, r = arr.length-1) {
  let pivotIdx = l

  let pl = l
  let pr = r
  while (pl < pr) {
    while(arr[pl] < arr[pivotIdx]) pl++;
    while(arr[pr] > arr[pivotIdx]) pr--;
    if (pl >= pr) break;

    if (pl === pivotIdx) {
      pivotIdx = pr
    } else if (pivotIdx === pr) {
      pivotIdx = pl
    }
    swap(arr, pl, pr)
    pl++
    pr--
  }
  if (pl === pr && arr[pl] > arr[pivotIdx]) {
    swap(arr, pl, pivotIdx)
    pivotIdx = pl
  } else if (pivotIdx > pl) {
    while(arr[pl] < arr[pivotIdx]) pl++;
    swap(arr, pl, pivotIdx)
    pivotIdx = pl
  } else if (pivotIdx < pr) {
    while(arr[pr] > arr[pivotIdx]) pr--;
    swap(arr, pr, pivotIdx)
    pivotIdx = pr
  }

  

  return pivotIdx
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, l = 0, r = arr.length-1) {
  if (l >= r) return arr
  const pivotIdx = pivot(arr, l, r)
  quickSort(arr, l, pivotIdx-1)
  quickSort(arr, pivotIdx+1, r)
  return arr
}

module.exports = {quickSort, pivot};