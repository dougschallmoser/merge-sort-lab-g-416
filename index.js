function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstHalf, secondHalf) {
  let sorted = []
  let currentMin;
  while (firstHalf.length !== 0 && secondHalf.length !== 0) {
    currentMin = findMinAndRemoveSorted()
  }
}