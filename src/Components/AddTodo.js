import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Actions/todoActions';
import './AddTodo.css';

const AddTodo = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (task.trim()) {
            dispatch(addTodo(task));
            setTask('');
        }
    };

    return (
        <div className="add-todo">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default AddTodo;