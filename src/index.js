import "./style/index.scss";

const addTaskBtn = document.querySelector("[name='submitTask']");

const listTaskContainer = document.querySelector(".listTaskContainer");
const listTaskContainer__ul = document.createElement("ul");
listTaskContainer.appendChild(listTaskContainer__ul);

addTaskBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const taskValueContainer = document.querySelector("[name='addTask']");
  const taskValue = taskValueContainer.value;

  const addTaskConstructor = `
        <li>${taskValue}</li>
    `;
  listTaskContainer__ul.innerHTML += addTaskConstructor;
  if (event) {
    taskValueContainer.value = "";
  }
});
