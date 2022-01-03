//JS Quick sort - Divide and Conquer - Sort on the divide - not stable with Lomuto's partiion and Hoare's partition
const QuickSort = (arr, start, end) => {
  // return if the array can't be split
  if (start >= end) {
    return;
  }

  // Returns pivotIndex and swaps
  let index = lomutosPartition(arr, start, end);

  // Recursively apply the same logic to the left and right subarrays
  QuickSort(arr, start, index - 1);
  QuickSort(arr, index + 1, end);
  return arr;
};
//Time it will take - Best Case just the for loop - instantiation of the variables and the conditional while loop check
//Worst case will go through all the elements in the while loop for each index in the array - worst case would be reverse sorted
let array = [9, 5, 8, 8, 6, 3, 1, 2, 7];
let test = QuickSort(array, 0, 8);
console.log('Test: ' + test);

function lomutosPartition(arr, startIndex, endIndex) {
  //randomize the pivot index - highly recommended - if deterministic (start or end) if sorted already the time taken could be quadratic
  let pivotIndex = getRandomIntInclusive(startIndex, endIndex); //random
  const pivotValue = arr[pivotIndex];
  //swap pivot element with starting element
  swap(arr, startIndex, pivotIndex); //bring the pivotValue to the start of the subarray
  pivotIndex = startIndex; //start of array
  for (let i = startIndex; i <= endIndex; i++) {
    if (arr[i] < pivotValue) {
      // Moving to next element
      pivotIndex++; //must be before the swap this will make all of the
      // Swap
      swap(arr, i, pivotIndex);
    }
  }
  // Putting the pivot value in the middle - final place
  swap(arr, startIndex, pivotIndex);
  return pivotIndex;
}

function getRandomIntInclusive(min, max) {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function swap(arr, index1, index2) {
  return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
}
