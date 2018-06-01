// Bubble Sort
// Roger Lam
// Month Day, Year

let someList = [5, 15, 3, 8, 9, 1, 20, 7];

function setup() {
  someList = bubbleSort(someList);
}

function bubbleSort(aList) {
  let swapRequired = true;

  while (swapRequired) {
    swapRequired = false;

    for (let i = 0; i < aList.length - 1; i++) {
      if (aList[i] > aList[i+1]) {
        let temp = aList[i];
        aList[i] = aList[i + 1];
        aList[i + 1] = temp;
        swapRequired = true;
      }
    }
    print(aList);
  }
  return aList;
}
