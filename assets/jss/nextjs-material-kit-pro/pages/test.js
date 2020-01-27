// Two sorted arrays numbers lowest to highest.

// create a new array
// go to index 0 of first array and compare it to index 0 of second array
// whichever number smaller at index 0 I would push into the new array and then compare the next index 
// of the array with the smaller number the array with the larger number
// repeat until I get the end of one of the arrays
// push the rest of the numbers from the non empty array into the new array



const sortArr = (array1, array2) => {
  let i = 0;
  let j = 0;
  const newArr = []
  while (array1[i] && array2[j]) {
    if (array1[i] > array2[j]) {
      newArr.push(array2[j])
      j ++
    } else {
      newArr.push(array1[i])
      i++
    }
  }

  while (array1[i]) {
    newArr.push(array1[i])
    i++
  }

  while (array2[j]) {
    newArr.push(array2[j])
    j++
  }

}


const array1 = [1,2,5]
const array2 = [1,3,4]

console.log(sortArr(array1, array2))