import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../Actions/todoActions';

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), task: action.payload, completed: false }]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, task: action.payload.updatedTask }
                        : todo
                )
            };
        default:
            return state;
    }
};

export default todoReducer;