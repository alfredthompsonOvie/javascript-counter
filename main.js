const addCount = document.querySelector(".addition");
const reduceCount = document.querySelector(".subtraction");
const result = document.querySelector(".result");
let total = 0;

addCount.addEventListener("click", () => {
    total === 50 ? total : total++;
    result.textContent = total;
    total > 0 ? (result.style.color = "green") : (result.style.color = "gray");
});
reduceCount.addEventListener("click", () => {
    total === 0 ? total : total--;
    result.textContent = total;
    total > 0 ? (result.style.color = "green") : (result.style.color = "gray");
});
