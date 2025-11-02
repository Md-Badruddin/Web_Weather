function getTasks() {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
}

function setTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  const tasks = getTasks();
  tasks.forEach((task, idx) => {
    const li = document.createElement("li");
    li.textContent = task;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    delBtn.onclick = () => {
      tasks.splice(idx, 1);
      setTasks(tasks);
      renderTasks();
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

document.getElementById("addBtn").onclick = function() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    const tasks = getTasks();
    tasks.push(task);
    setTasks(tasks);
    renderTasks();
    input.value = "";
  }
};

window.onload = renderTasks;
