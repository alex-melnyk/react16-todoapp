import React, { FunctionComponent } from 'react';

import './TodoItem.scss';


type Props = {
  label: string;
  createdDate: Date;
  dueDate?: Date;
  description?: string;
};

export const TodoItem: FunctionComponent<Props> = ({ label, createdDate, dueDate, description }) => (
  <div className="todo-item">
    <div className="label">{label}</div>
    <div className="description">{description}</div>
    <div className="created-date">{createdDate.toLocaleString()}</div>
    <div>{dueDate}</div>
  </div>
);