import React from 'react';
import { differenceInHours } from 'date-fns';
import './TodoItem.scss';

const calculateExpiration = (date_c: Date | number | string, date_d?: Date | number | string): Number | null => {
  if (date_d) {
    return differenceInHours(new Date(date_d), new Date(date_c));
  }

  return null;
};

export const TodoItem: React.FC<ItemModel> = ({ label, date_c, date_d, description, complete }) => {
  const expireIn = calculateExpiration(date_c, date_d);

  return (
    <div className={`todo-item${complete ? ' complete' : ''}`}>
      <div className="label">{label}</div>
      <div className="description">{description}</div>
      <div className="created-date">{new Date(date_c).toLocaleString()}</div>
      {expireIn && date_d && (
        <div className={`due-date ${expireIn < 1 ? 'attention' : ''}`}>
          {new Date(date_d).toLocaleString()}
        </div>
      )}
    </div>
  );
};