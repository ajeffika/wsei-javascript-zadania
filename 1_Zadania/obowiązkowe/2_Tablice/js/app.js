function distFromAverage(arr) {
  let sum = 0;
  let newTab = [];
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  let avg = sum / arr.length;
  arr.forEach(el => {
    newTab.push(el - avg);
  });
  return newTab
}

let arr = [1, 2, 3, 4, 5, 6, 7];
distFromAverage(arr);

// Zadanie 1

var favouriteFruits = ['apple', 'pear', 'grape', 'banana'];
console.log(favouriteFruits[favouriteFruits.length - 1]);

for (var i = 0; i < favouriteFruits.length; i++) {
  console.log(favouriteFruits[i])
}

//zadanie 2

/!!!!!!!!!!!!!!!


//zadanie 3


function createArray(number) {
  var newArray = [];
  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}
console.log(createArray(6));
console.log(createArray(1));
console.log(createArray(-6));
console.log(createArray(0));
