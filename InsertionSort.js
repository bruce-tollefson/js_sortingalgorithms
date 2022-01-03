//JS Insertion sort - Decrease and Conquer - can be stable if >=
const insertionSort = (integerList) => {
  const listLength = integerList.length; //the last nth donesn't matter because it will already be sorted /*(C1)*/
  for (let i = 0; i < listLength; i++) {
    //increment through list
    let temp = integerList[i];
    let red = i - 1;
    while (red >= 0 && integerList[red] > temp) {
      integerList[red + 1] = integerList[red]; //right shift
      red--;
    }
    integerList[red + 1] = temp;
  }
  return integerList;
};
//Time it will take - Best Case just the for loop - instantiation of the variables and the conditional while loop check
//Worst case will go through all the elements in the while loop for each index in the array - worst case would be reverse sorted
let test = insertionSort([9, 5, 8, 8, 6, 3, 1, 2, 7]);
console.log('Test: ' + test);
