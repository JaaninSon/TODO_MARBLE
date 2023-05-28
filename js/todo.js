const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEY = 'todos'

const toDos = [];

function saveToDos(){
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
   const li = event.target.parentElement;
   li.remove();
}

function paintToDo(newToDo){
   const li = document.createElement('li');
   const span = document.createElement('span');
   span.innerText = newToDo;

   const toDoBtn = document.createElement('button');
   toDoBtn.innerText = '💥';
   toDoBtn.addEventListener('click', deleteToDo);

   li.appendChild(span);
   li.appendChild(toDoBtn);

   toDoList.appendChild(li);
}

function toDoSubmit (e){
   e.preventDefault();
   const newToDo = toDoInput.value;
   toDoInput.value = "";
   toDos.push(newToDo);
   paintToDo(newToDo);
   saveToDos();

}

toDoForm.addEventListener('submit', toDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
   const parsedToDos = JSON.parse(savedToDos);
   parsedToDos.forEach();
}