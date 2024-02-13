const userInput = document.querySelector("#input-box input");
const addButton = document.querySelector("#input-box button");
let taskBoard = document.getElementById("task-board");

let todoList = [];

function addTodoList() {
  let task = {
    id: randomId(),
    taskContent: userInput.value,
    isComplete: false,
  };
  todoList.push(task);
  console.log(todoList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].isComplete === true) {
      resultHTML += `<div class="task task-grey">
      <div class="task-done">${todoList[i].taskContent} </div>
      <div>
        <button onclick="toggleComplete('${todoList[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
        <button onclick="toggleDelete('${todoList[i].id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>`;
    } else {
      resultHTML += ` <div class="task">
        <div>${todoList[i].taskContent} </div>
        <div>
          <button onclick="toggleComplete('${todoList[i].id}')"><i class="fa-solid fa-check"></i></button>
          <button onclick="toggleDelete('${todoList[i].id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>`;
    }
  }
  taskBoard.innerHTML = resultHTML;
}

function toggleComplete(id) {
  console.log("id:", id);
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === id) {
      todoList[i].isComplete = !todoList[i].isComplete;
      break;
    }
  }
  console.log(todoList);
  render();
}

function toggleDelete(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === id) {
      todoList.splice(i, 1);
      break;
    }
  }
  render();
}

function randomId() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

addButton.addEventListener("click", addTodoList);
