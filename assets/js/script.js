const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo__list-items");

todoInput.addEventListener("keypress", (e) => {
  e.key === "Enter" && addTodo();
});

function addTodo(e) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo__list-items-item", "flex");
  const taskDiv = document.createElement("div");
  const deleteDiv = document.createElement("div");
  taskDiv.classList.add("task", "flex");
  deleteDiv.classList.add("delete");
  todoDiv.append(taskDiv, deleteDiv);

  const taskDivButton = document.createElement("button");
  const taskDivButtonImage = document.createElement("img");
  const taskDivLi = document.createElement("li");
  if (todoInput.value.length === 0) {
    todoDiv.style.display = "none";
  }
  taskDivLi.innerText = todoInput.value;
  todoInput.value = "";

  const deleteDivButton = document.createElement("button");
  const deleteDivButtonImage = document.createElement("img");
  taskDiv.append(taskDivButton, taskDivLi);
  taskDivButton.appendChild(taskDivButtonImage);
  deleteDiv.appendChild(deleteDivButton);
  deleteDivButton.appendChild(deleteDivButtonImage);

  taskDivButtonImage.src = "./assets/images/icon-check.svg";
  taskDivButtonImage.alt = "task completed";
  deleteDivButtonImage.src = "./assets/images/icon-delete.svg";
  deleteDivButtonImage.alt = "delete task";

  todoList.appendChild(todoDiv);

  deleteDivButton.addEventListener("click", () => {
    todoDiv.remove();
  });
}
