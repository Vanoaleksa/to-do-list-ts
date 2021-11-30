import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import { toDoListItem } from "../../redux/types";
import { changeItemState, removeItem } from "../../redux/actionCreators";

import "./toDoItem.css";

type Props = {
  item: toDoListItem;
};

export const ToDoItem: React.FC<Props> = ({ item }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleDeleteItem: () => void = () => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleChangeCheckBox: () => void = () => {
    dispatch(changeItemState({ id: item.id }));
  };

  return (
    <div className="list-item">
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={handleChangeCheckBox}
      ></input>
      <div className="list-item_sub-title">{item.name}</div>
      <button onClick={handleDeleteItem}>X</button>
    </div>
  );
};
