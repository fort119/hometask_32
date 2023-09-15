let arr = [1, 2, 3, 4, [4.1, 4.2, ["4.2.1", "4.2.2"]], 6, 7];

function generateList(arr) {
  const ul = document.createElement("ul");
  return arr.reduce(function (ul, currentItem) {
    const li = document.createElement("li");
    if (!Array.isArray(currentItem)) {
      li.textContent = currentItem;
    } else {
      const nestedList = generateList(currentItem);
      li.appendChild(nestedList);
    }
    ul.appendChild(li);
    return ul;
  }, ul);
}

const testDiv = document.querySelector(".test");
testDiv.appendChild(generateList(arr));
