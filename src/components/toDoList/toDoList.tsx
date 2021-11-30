import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useSelector, shallowEqual } from "react-redux";
import { ItemsState, toDoListItem } from "../../redux/types";
import { removeCompletedItems, resetAll } from "../../redux/actionCreators";
import { ToDoItem } from "../toDoItem/toDoItem";

import "./toDoList.css";

import AddingField from "../addingField/addingField";

const ToDoList: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const items: readonly toDoListItem[] = useSelector(
    (state: ItemsState) => state.items,
    shallowEqual
  );

  const handleClearCompletedItem: () => void = () => {
    dispatch(removeCompletedItems());
  };

  const handleResetAll: () => void = () => {
    dispatch(resetAll());
  };

  return (
    <div className="to-do-list">
      <div className="to-do-list__title">To do list</div>
      <div className="to-do-list__content">
        <AddingField />
        {items &&
          items.map((item: toDoListItem) => (
            <ToDoItem key={item.id} item={item} />
          ))}
      </div>
      <button className='to-do-button' onClick={handleClearCompletedItem}>Clear completed</button>
      <button className='to-do-button' onClick={handleResetAll}>Reset all</button>
    </div>
  );
};

export default ToDoList;
