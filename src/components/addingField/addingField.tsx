import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { addItem } from "../../redux/actionCreators";

import "./addingField.css";

const AddingField: React.FC = () => {
  
  const [errorInput, setErrorInput] = React.useState<null | string>(null);

  const inputEl = useRef<HTMLInputElement>(null);

  const dispatch: Dispatch<any> = useDispatch();

  const handleClickButton: () => void = () => {
    if (inputEl.current?.value.trim() !== "") {
      dispatch(addItem({ name : inputEl.current?.value || null}));
      setErrorInput(null);
    } else {
      setErrorInput("Write please task");
    }
  };

  return (
    <div className="adding-field__container">
      <div className="adding-field__input-container">
        <input
          className="adding-field__input"
          placeholder={"write new task"}
          ref={inputEl}
        ></input>
        {errorInput && <div className="adding-field__error">{errorInput}</div>}
      </div>
      <button onClick={handleClickButton}>+</button>
    </div>
  );
};

export default AddingField;
