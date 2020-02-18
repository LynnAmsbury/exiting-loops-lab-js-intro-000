function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i]++;
  }
}

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 10) {
    continue
  }

  scores[i]++
}
