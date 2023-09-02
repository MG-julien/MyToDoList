import "./style/index.scss";

const addTaskBtn = document.querySelector("[name='submitTask']");
const listTaskContainer = document.querySelector(".listTaskContainer__ul");

addTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const taskValueContainer = document.querySelector("[name='addTask']");

    const taskValue = taskValueContainer.value;
    const addTaskConstructor = `
    <li class="">
      
      <input type="checkbox" name="jkjk"/>
    </li>
  `;

    listTaskContainer.innerHTML += addTaskConstructor;

    if (event) {
        taskValueContainer.value = "";
    }
});
