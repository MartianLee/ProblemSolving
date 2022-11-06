function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const generateArray = (length) => {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = getRandomInt(100);
  }
  console.log(arr);
  return arr;
};

const drawyArray = (arr) => {
  const chart = document.getElementById("chart");
  chart.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const bar1 = document.createElement("div");
    bar1.className = "bar";
    bar1.id = i;
    bar1.style.height = `${arr[i]}%`;
    chart.appendChild(bar1);
  }
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const bubblesort = async (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        await sleep(80);
        drawyArray(arr);
      }
    }
  }
};

window.onload = function () {
  const arrayLength = 30;
  let arr = generateArray(arrayLength);
  drawyArray(arr);
  alert('gogo');
  bubblesort(arr);

  console.log(chart);
};
