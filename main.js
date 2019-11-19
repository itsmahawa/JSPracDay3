const input = document.querySelector("#input");
const convert = () => {
  const output = document.querySelector("#output");
  if (input.value !== "") {
    output.style.display = "block";
  } else {
    output.style.display = "none";
  }

  document.querySelector("#gram").textContent = input.value * 453.592;

  document.querySelector("#kilogram").textContent =
    (input.value * 453.592) / 1000;

  document.querySelector("#ounce").textContent = input.value * 16;
};
input.addEventListener("input", convert);
