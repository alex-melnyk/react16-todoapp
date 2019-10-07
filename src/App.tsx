import React, { useEffect, useState } from 'react';
import './App.scss';
import { TodoList } from './components';

const App: React.FC = () => {
  const [todo, setTodo] = useState<ItemModel[]>([]);

  useEffect(() => {
    fetch('./fake-data.json')
      .then((v) => v.json())
      .then(({ items }: { items: ItemModel[] }) => setTodo(items));
  }, []);


  return (
    <div className="App">
      <TodoList items={todo}/>
    </div>
  );
};

export default App;
