import React from "react";
import { Provider } from "react-redux";
import  store from "./redux/store";
import "./App.css";
import ToDoList from "./components/toDoList/toDoList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoList />
      </div>
    </Provider>
  );
};

export default App;
