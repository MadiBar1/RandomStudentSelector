import "./style.css";

const body = document.body;
const darkModeRadio = document.getElementById("dark");
const lightModeRadio = document.getElementById("light");

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl font-bold underline">
    Hello Vite!
  </h1>
`;

darkModeRadio.addEventListener("change", () => {
  body.classList.remove("bg-gray-400");
  body.classList.add("bg-gray-800");
});

lightModeRadio.addEventListener("change", () => {
  body.classList.remove("bg-gray-800");
  body.classList.add("bg-gray-400");
});
