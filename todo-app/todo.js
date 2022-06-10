 // GLOBAL DATA
 let todos = [ { id: 1, title: 'Learn HTML' }, { id: 2, title: 'Learn CSS'}, { id: 3, title: 'Learn JS'} ];

 //SELECT DOM
 const todoList = document.querySelector('.todo-list');
 const todoButton = document.querySelector('.todo-button');
 const todoInput = document.querySelector('.todo-input');

 //EVENT LISTENERS
 document.addEventListener('DOMContentLoaded', getTodoList);
 todoButton.addEventListener('click', save);
 todoList.addEventListener('click', removeTodo);


 function getTodoList() {
     for (let i = 0; i < todos.length; i++) {
         console.log(todos[i]); // { id: 1, title: 'Learn HTML' }

         //harus buat element li
         const newTodo = document.createElement('li');
         newTodo.innerText = todos[i]['title'];

         todoList.appendChild(newTodo);
     }
 }

 function save(event) {
    event.preventDefault(); // ini untuk mencegah page kita ke-refresh

    let todoObj = { id: todos.length+ 1, title: todoInput.value}
    todos.push(todoObj);

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    todoList.appendChild(newTodo);

    todoInput.innerText = '';
 }

 function removeTodo(event) {
     const itemTodo = event.target;

     todos = todos.filter(todo => {
         if (todo.title !== itemTodo.innerText) {
             return todo;
         }
     })

     itemTodo.remove();
 }

 