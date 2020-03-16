var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos'));

//função que renderiza os itens da lista
function renderTodos(){
    listElement.innerHTML='';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+ pos + ')')

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText); 
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodos();
//função para adicionar os inputs na lista
function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
//apos clicar no botão, adiciona o conteúdo do input
buttonElement.onclick= addTodo;

//função para excluir itens da lista
function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

//função que salva o conteudo dos itens localmente utilizando json
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}