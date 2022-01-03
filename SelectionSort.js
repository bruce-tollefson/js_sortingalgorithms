//JS Selection sort - not stable
const selectionSort = (integerList) => {
  const listLength = integerList.length - 1; //the last nth donesn't matter because it will already be sorted /*(C1)*/
  for (let i = 0; i < listLength; i++) {
    //looping through current List
    let minIndex =
      i; /*get starting value for the current min value in index position (C2)*/
    for (let j = i + 1; j < listLength; j++) {
      /* C7n */
      // will happen n-1 times
      //loop through rest of the list after current index
      if (integerList[minIndex] > integerList[j]) {
        /*(C3) will happen n(n-1)/2 times*/
        minIndex = j; /*(C4)*/
      }
    }

    //Need to swap - very important take the current lowest index value and replace with the current index value then take the current index value and change to the lowest value
    //swap /*(C5)n*/
    swap(integerList, minIndex, i);
  }
  return integerList; /*(C6)*/
};
/*total time for the funciton is Tn = C1 +C2n + C3n(n-1)/2 + C4n(n-1)/2 + C5n + C6 + C7n
 * Tn = An(Squared) - Dominant + ( bn + c ) - lower order term - lower order can drop in size due to the dominant
 * An(squared)
 * Tn = Theta(nSquared) = Cn(Sqaured)
 * As n --> infinity, T(n) grows in a quadratic fashion*/

let test = selectionSort([9, 5, 8, 8, 6, 3, 1, 2, 7]);
console.log('Test: ' + test);

function swap(arr, index1, index2) {
  return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
}
