//Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    // Prevent form from submitting
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  // Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerText = 'Complete';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Check Trash button
  const trashButton = document.createElement('button');
  trashButton.innerText = 'Delete';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv)

  //Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    // Delet To DO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    //Check Mark
    if(item.classList[0] ===  "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}