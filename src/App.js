
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import ToDoList from './Components/ToDoList';
import AddTodo from './Components/AddTodo';

import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>To-Do List App</h1>
                <AddTodo />
                <ToDoList />
            </div>
        </Provider>
    );
};

export default App;
