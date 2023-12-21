const container = document.querySelector(".container");
const addBtn = document.getElementById("addBtn");
const field = document.getElementById("field");

addBtn.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${field.value}`;
  task.appendChild(li);

  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkBtn.classList.add("check");
  task.appendChild(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.classList.add("delete");
  task.appendChild(deleteBtn);

  if (field.value === "") {
    alert("Input field cannot be empty. Please enter a task!");
  } else {
    container.appendChild(task);
  }

  field.value = "";

  checkBtn.addEventListener('click', function(){
    checkBtn.previousSibling.style.textDecoration = 'line-through';
    checkBtn.previousSibling.style.opacity = '0.5';
  })
  deleteBtn.addEventListener('click', function(){
    deleteBtn.parentElement.remove();
  })
});
