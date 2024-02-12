const userInput = document.querySelector("#input-box input");
const addButton = document.querySelector("#input-box button");
let taskBoard = document.getElementById("task-board");

let todoList = [];

function addTodoList() {
  let taskConten = userInput.value;
  todoList.push(taskConten);
  console.log(todoList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    resultHTML += ` <div class="task">
        <div>${todoList[i]} </div>
        <div>
          <button><i class="fa-solid fa-check"></i></button>
          <button><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>`;
  }
  taskBoard.innerHTML = resultHTML;
}

addButton.addEventListener("click", addTodoList);
