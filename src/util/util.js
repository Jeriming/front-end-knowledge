export function getNextData(arr, currentIndex) {
  if (currentIndex >= arr.length) {
    currentIndex = 0;
  }
  const data = arr.splice(currentIndex, 1);
  return data[0];
}

export function writeConfigToHtml(text) {
  const dom = document.createElement("script");
  dom.setAttribute("type", "text/javascript");
  dom.setAttribute("id", "pageConfig");
  dom.text = JSON.stringify(text);
  document.head.appendChild(dom);
}
