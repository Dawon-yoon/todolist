const userInput = document.querySelector("#input-box input");
const addButton = document.querySelector("#input-box button");
let taskBoard = document.getElementById("task-board");
let tabs = document.querySelectorAll(".task-tabs div");
let todoList = [];
let mode = "all";
let filterList = [];

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTodoList() {
  if (userInput.value === "") {
    return alert("please enter a todo");
  }
  let task = {
    id: randomId(),
    taskContent: userInput.value,
    isComplete: false,
  };
  addButton.disabled = false;
  todoList.push(task);
  console.log(todoList);
  render();
}

function render() {
  let list = [];
  if (mode == "all") {
    list = todoList;
  } else if (mode == "ongoing") {
    list = filterList;
  } else if (mode == "done") {
    list = filterList;
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete === true) {
      resultHTML += `<div class="task">
      <div class="task-done">${list[i].taskContent} </div>
      <div>
        <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
        <button onclick="toggleDelete('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>`;
    } else {
      resultHTML += ` <div class="task">
        <div>${list[i].taskContent} </div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
          <button onclick="toggleDelete('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
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
    }
  }
  render();
}

function toggleDelete(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id === id) {
      todoList.splice(i, 1);
      if (mode === "all") {
        for (let j = 0; j < todoList.length; j++) {
          if (todoList[j].id === id) {
            todoList.splice(j, 1);
            break;
          }
        }
      } else {
        for (let j = 0; j < todoList.length; j++) {
          if (todoList[j].id === id) {
            todoList.splice(j, 1);
            break;
          }
        }
        for (let j = 0; j < filterList.length; j++) {
          if (filterList[j].id === id) {
            filterList.splice(j, 1);
            break;
          }
        }
      }
      break;
    }
  }
  render();
}

function randomId() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

function filter(event) {
  mode = event.target.id;
  filterList = [];
  if (mode === "all") {
    render();
  } else if (mode === "ongoing") {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].isComplete === false) {
        filterList.push(todoList[i]);
      }
    }
  } else if (mode === "done") {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].isComplete) {
        filterList.push(todoList[i]);
      }
    }
  }

  render();
}

addButton.addEventListener("click", addTodoList);
userInput.addEventListener("focus", (event) => {
  userInput.value = "";
});
userInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addTodoList(event);
  }
});
