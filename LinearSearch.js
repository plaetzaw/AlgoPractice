//Linear Search

function getMesomefuckingnumbaz(values, target) {
  for (var i = 0; i < values.length; i++) {
    if (values[i] == target) {
      return i;
    }
  }
  return -1;
}

getMesomefuckingnumbaz([1, 17, 23, 69, -34, 33, 17, 60, -27], 33);
