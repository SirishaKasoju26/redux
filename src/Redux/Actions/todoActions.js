export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (task) => ({
    type: ADD_TODO,
    payload: task
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});

export const updateTodo = (id, updatedTask) => ({
    type: UPDATE_TODO,
    payload: { id, updatedTask }
});