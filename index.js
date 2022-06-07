// INPUT ELEMENTS
// buttons
const washBtn = document.getElementById("wash");
const mowBtn = document.getElementById("mow");
const weedBtn = document.getElementById("weed");
const resetBtn = document.getElementById("invoice");
const idBtn = document.getElementById("idBtn");

// HTML
const renderEl = document.getElementById("render");
const totalEl = document.getElementById("total");

// array
const serviceArr = [];
const valueArr = [];

// Displays the total amount from array
function displayTotal() {
  const sum = valueArr.reduce((partialSum, a) => partialSum + a, 0);
  totalEl.textContent = `$${sum}`;
}

// Display the text on the HTML
function displayService() {
  renderEl.innerHTML = serviceArr.join(" ");
  console.log(serviceArr);
}

// Remove wash from array and html
function removeWash() {
  let index = serviceArr.indexOf(
    `<div class="item"><p>Wash Car</p> <button class="idBtn" id="idBtn" onclick="removeWash()">Remove</button> <p class="price"><span class="dollar">$</span>10</p></div>`
  );
  serviceArr.splice(index, 1);
  valueArr.splice(index, 1);
  displayService();
  displayTotal();
  washBtn.disabled = false;
}

// remove mow from array and html
function removeMow() {
  let index = serviceArr.indexOf(
    `<div class="item"><p>Mow Lawn</p> <button class="idBtn" id="idBtn" onclick="removeMow()">Remove</button> <p class="price"><span class="dollar">$</span>20</p></div>`
  );
  serviceArr.splice(index, 1);
  valueArr.splice(index, 1);
  displayService();
  displayTotal();
  mowBtn.disabled = false;
}

// remove weed from array and html
function removeWeed() {
  let index = serviceArr.indexOf(
    `<div class="item"><p>Pull Weeds</p> <button class="idBtn" id="idBtn" onclick="removeWeed()">Remove</button> <p class="price"><span class="dollar">$</span>30</p></div>`
  );
  serviceArr.splice(index, 1);
  valueArr.splice(index, 1);
  displayService();
  displayTotal();
  weedBtn.disabled = false;
}

// This is what happens when you push the buttons
//add wash to array and html
washBtn.addEventListener("click", () => {
  valueArr.push(10);
  serviceArr.push(
    `<div class="item"><p>Wash Car</p> <button class="idBtn" id="idBtn" onclick="removeWash()">Remove</button> <p class="price"><span class="dollar">$</span>10</p></div>`
  );
  displayService();
  displayTotal();
  washBtn.disabled = true;
});

//add mow to array and html
mowBtn.addEventListener("click", () => {
  valueArr.push(20);
  serviceArr.push(
    `<div class="item"><p>Mow Lawn</p> <button class="idBtn" id="idBtn" onclick="removeMow()">Remove</button> <p class="price"><span class="dollar">$</span>20</p></div>`
  );
  displayService();
  displayTotal();
  mowBtn.disabled = true;
});

//add weed to array and html
weedBtn.addEventListener("click", () => {
  valueArr.push(30);
  serviceArr.push(
    `<div class="item"><p>Pull Weeds</p> <button class="idBtn" id="idBtn" onclick="removeWeed()">Remove</button> <p class="price"><span class="dollar">$</span>30</p></div>`
  );
  displayService();
  displayTotal();
  weedBtn.disabled = true;
});

//a total reset button for testing purposes
resetBtn.addEventListener("click", () => {
  serviceArr = [];
  valueArr = [];
  render.innerHTML = "";
  displayTotal();
  washBtn.disabled = false;
  mowBtn.disabled = false;
  weedBtn.disabled = false;
});
