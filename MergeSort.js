//JS Merge sort - Divide and Conquer - sort on the combine - stable if <= (line 19)
const mergeSort = (integerList) => {
  const half = integerList.length / 2;

  // Base case or terminating case
  if (integerList.length < 2) {
    return integerList;
  }

  const left = integerList.splice(0, half);
  return merge(mergeSort(left), mergeSort(integerList)); //recursion
};

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}
//Time it will take - Best Case just the for loop - instantiation of the variables and the conditional while loop check
//Worst case will go through all the elements in the while loop for each index in the array - worst case would be reverse sorted
let test = mergeSort([9, 5, 8, 8, 6, 3, 1, 2, 7]);
console.log('Test: ' + test);
