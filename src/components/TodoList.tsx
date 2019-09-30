import React, { FunctionComponent } from 'react';
import { TodoItem } from './TodoItem';

import './TodoList.scss';

type Props = {};

export const TodoList: FunctionComponent<Props> = () => {
  const items = [...new Array(5)].map((item, index) => (
    <TodoItem
      label={`Item #${index}`}
      createdDate={new Date()}
    />
  ));

  return (
    <div className="todo-list">
      {items}
    </div>
  );
};