import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../Redux/Actions/todoActions';
import './ToDoList.css';

const ToDoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleUpdate = (id) => {
        const updatedTask = prompt("Update the task:");
        if (updatedTask) {
            dispatch(updateTodo(id, updatedTask));
        }
    };

    return (
        <div className="todo-list">
            <h3>Tasks</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        <div className="actions">
                            <button onClick={() => handleUpdate(todo.id)}>Edit</button>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;