let underBar = document.getElementById("underline");
let taskTabs = document.querySelectorAll(".task-tab");

function horizontalIndicator(e) {
  underBar.style.left = e.currentTarget.offsetLeft + "px";
  underBar.style.width = e.currentTarget.offsetWidth + "px";
  underBar.style.top = e.currentTarget.offsetHeight + "px";
}

taskTabs.forEach((tab) =>
  tab.addEventListener("click", (e) => horizontalIndicator(e))
);
