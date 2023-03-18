//your code here
const newTodoInput=document.getElementById("newTodoInput");
const addTodoBtn=document.getElementById("addTodoBtn");
const todoList =document.getElementById("todoList");

addTodoBtn.addEventListener("click", function(){
	const newTodo = newTodoInput.value.trim();
	if(newTodo !== "")
	{
		const newTodoItem=document.createElement("li");
		newTodoItem.textContent=newTodo;
		todoList.appendChild(newTodoItem);
		newTodoInput.value = "";
	}
});


