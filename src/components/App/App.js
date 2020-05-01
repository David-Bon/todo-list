import React from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import TodoContainer from "../Todo/todo-container";

const App = () => {
  return (<div className='container row justify-content-center'>
          <AppHeader/>
          <TodoContainer/>
      </div>
     );
}

export default App;
