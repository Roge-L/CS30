// Selection Sort
// Roger Lam
// Month Day, Year

let someList = [5, 15, 3, 8, 9, 1, 20, 7];

function setup() {
  someList = selectionSort(someList);
  print(someList);
}

function selectionSort(aList) {
  let swapLocation = 0;

  while (swapLocation < aList.length) {
    let smallestLocation = swapLocation;

    for (let i = swapLocation; i < aList.length; i++) {
      if (aList[i] < aList[smallestLocation]) {
        smallestLocation = i;
      }
    }

    let temp = aList[swapLocation];
    aList[swapLocation] = aList[smallestLocation];
    aList[smallestLocation] = temp;

    swapLocation++;
  }
  return aList;
}
