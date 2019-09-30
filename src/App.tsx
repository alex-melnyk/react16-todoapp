import React, { FunctionComponent } from 'react';
import './App.scss';
import { TodoList } from './components';

const App: FunctionComponent = () => {
  return (
    <div className="App">

      <TodoList/>
    </div>
  );
};

export default App;
