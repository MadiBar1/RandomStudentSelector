import "./style.css";

const body = document.body;
const darkModeRadio = document.getElementById("dark");
const lightModeRadio = document.getElementById("light");

darkModeRadio.addEventListener("change", () => {
  console.log("dark mode selected");
  body.classList.remove("bg-gray-200", "text-black");
  body.classList.add("bg-gray-800", "text-white");
});

lightModeRadio.addEventListener("change", () => {
  body.classList.remove("bg-gray-800", "text-white");
  body.classList.add("bg-gray-200", "text-black");
});
