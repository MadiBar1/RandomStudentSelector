import "./style.css";
import getStudents from "./students.js";

const button = document.getElementById("randomStudentButton");

button.addEventListener("click", () => {
  const students = getStudents();
  const randomIndex = Math.floor(Math.random() * students.length);
  const randomId = students[randomIndex].ID;
  const selectedStudent = students.find((student) => student.ID === randomId);
  const displayElement = document.getElementById("selectedStudent");
  displayElement.textContent = `Selected Student: ${selectedStudent.Name}`;
});
