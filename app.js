let todoInput = document.getElementById('todo-input');
    let addButton = document.getElementById('add-button');
    let deleteAllButton = document.getElementById('delete-all-button');
    let todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        let todoText = todoInput.value.trim();

        if (todoText !== '') {
            let listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${todoText}</span>
                <button onclick="editTodo(this)">Edit</button>
                <button onclick="removeTodo(this)">Remove</button>
            `;
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    }

    function editTodo(button) {
        let listItem = button.parentNode;
        let todoText = listItem.querySelector('span').textContent;
        let newText = prompt('Edit task:', todoText);

        if (newText !== null) {
            listItem.querySelector('span').textContent = newText;
        }
    }

    function removeTodo(button) {
        let listItem = button.parentNode;
        todoList.removeChild(listItem);
    }
    function deleteAll() {
        todoList.innerHTML = '';
    }