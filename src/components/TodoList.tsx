import React, { FunctionComponent } from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.scss';

type Props = {
  items?: ItemModel[];
};

export const TodoList: FunctionComponent<Props> = ({ items }) => (
  <div className="todo-list">
    {items && items.map((item, index) => (
      <TodoItem
        key={`todoItem__${index}`}
        label={item.label}
        date_c={item.date_c}
        date_d={item.date_d}
        description={item.description}
        complete={item.complete}
      />
    ))}
  </div>
);