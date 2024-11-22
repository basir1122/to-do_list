function addTodo() {
    let input = document.getElementById('todo-input');
    let task = input.value.trim();

    if (task === '') {
      alert('Please enter something...');
    } else {
      let todoList = document.getElementById('todo-list');
      let listItem = document.createElement('li');
      listItem.textContent = task;

      let removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
 
      removeButton.addEventListener('click', () => {
          listItem.remove();
      });

      listItem.appendChild(removeButton);
      todoList.appendChild(listItem);

      input.value = '';
    }
  }