import { useState } from "react";

const AddTodo = (props) => {
  const [userInput, setUserInput] = useState("");
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };
  const addTodoHandler = (event) => {
    event.preventDefault();
    if (userInput.length <= 0) return;
    props.addUserInput(userInput);
    setUserInput("");
  };
  return (
    <form className="addTodoContainer" onSubmit={addTodoHandler}>
      <input
        className="addInput"
        onChange={handleInput}
        placeholder="add todo"
        value={userInput}
      />
      <button className="addBtn">add</button>
    </form>
  );
};

export default AddTodo;
