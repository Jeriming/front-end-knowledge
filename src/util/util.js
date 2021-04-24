export function getNextData(arr, currentIndex) {
  if (currentIndex >= arr.length) {
    currentIndex = 0;
  }
  const data = arr.splice(currentIndex, 1);
  return data[0];
}
