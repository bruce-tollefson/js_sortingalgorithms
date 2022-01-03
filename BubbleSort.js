//JS Bubble sort - stable
const bubbleSort = (integerList) => {
  const listLength = integerList.length - 1; //the last nth donesn't matter because it will already be sorted /*(C1)*/
  for (let i = 0; i < listLength; i++) {
    //increment through list
    for (let j = listLength; j > i; --j) {
      //increment down starting with the last index after each pass the left most index will be correct.
      if (integerList[j - 1] > integerList[j]) {
        //Need to swap - very important take the current lowest index value and replace with the current index value then take the current index value and change to the lowest value
        //swap
        swap(integerList, j, j - 1);
      }
    }
  }
  return integerList;
};

let test = bubbleSort([9, 5, 8, 8, 6, 3, 1, 2, 7]);
console.log('Test: ' + test);

function swap(arr, index1, index2) {
  return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
}
