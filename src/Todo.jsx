import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
let [newTodo,setNewTodo]=useState("");
function addList(){
    setTodos((prevTodos) => [
    ...prevTodos,
    { task: newTodo, id: uuidv4(),isDone:false }
]);
    setNewTodo("");
}
function addTask(event){
    setNewTodo(event.target.value);
}
function deleteTodo(id){
    setTodos(todos.filter((todo)=>todo.id!=id));
}
function doneTodo(id){
    setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id === id){
                return { ...todo, isDone: true };
            }
            return todo; 
        })
    );
}

    return(
        <>
        <input placeholder="enter a task" value={newTodo} onChange={addTask}/>
        <button onClick={addList}>Add</button>
        <br/><br/>
        <hr/>
        <h4>Todo List</h4>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <span style={todo.isDone?{textDecoration:"line-through"}:{}}>{todo.task}</span>
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            <button onClick={()=>doneTodo(todo.id)}>Done</button></li>))}
        </ul>
        </>
    );
}