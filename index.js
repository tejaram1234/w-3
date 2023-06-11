// Get the todo list element
const todoList = document.getElementById('todo-list');

// Function to create a new todo item
function createTodoItem(text) {
    const li = document.createElement('li');
    li.innerText = text;

    const button = document.createElement('button');
    button.innerText = '✖';
    button.addEventListener('click', completeTodo);

    li.appendChild(button);
    return li;
}

// Function to add a new todo item
function addTodoItem(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const text = todoInput.value.trim();

    if (text !== '') {
        const todoItem = createTodoItem(text);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

// Function to mark a todo item as completed
function completeTodo() {
    this.parentNode.classList.toggle('completed');
}

// Event listener for the form submit event
const addTodoForm = document.getElementById('add-todo-form');
addTodoForm.addEventListener('submit', addTodoItem);