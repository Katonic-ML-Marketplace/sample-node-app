const count = document.querySelector(".counter-value");

const addButton = document.querySelector(".counter-add");
const subButton = document.querySelector(".counter-substract");

addButton.addEventListener("click", () => {
  count.innerHTML = Number(count.innerHTML) + 1;
});

subButton.addEventListener("click", () => {
  count.innerHTML = Number(count.innerHTML) - 1;
});

