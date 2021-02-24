const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList'); 

const TODOS_LS = "toDos";


const toDos = [] ; 

function deleteToDo(event){
    const btn = event.target; 
    const li = btn.parentNode; 
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1 ;  
    delBtn.innerText = 'X';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text; 
    li.appendChild(span); 
    li.appendChild(delBtn);
    li.id = newId; 
    toDoList.appendChild(li);   
    const toDoObj = { 
        text : text,
        id: toDos.length + 1 
    };
    toDos.push(toDoObj); 
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentInput = toDoInput.value; 
    paintToDo(currentInput);
    toDoInput.value = "" ;
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
           paintToDo(toDo.text); 
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit); 
}

init();