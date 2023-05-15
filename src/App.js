import { Fragment, useState } from "react";
import AddTodo from "./componets/AddTodo";
import MainContainer from "./componets/MainContainer";
import DisplayTodo from "./componets/DisplayTodo";
import DisplayDoing from "./componets/DisplayDoing";
import DisplayCompleted from "./componets/DisplayFinished";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [todoList, SetTodoList] = useState([]);
  const handleAddTodo = (newTodo) => {
    SetTodoList((previous) => [
      ...previous,
      { title: newTodo, id: Math.random(), status: "todo" },
    ]);
    console.log(todoList);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <Fragment>
        <AddTodo addUserInput={handleAddTodo} />
        <MainContainer className=".main-container">
          <DisplayTodo list={todoList} />
          <DisplayDoing list={todoList} />
          <DisplayCompleted list={todoList} />
        </MainContainer>
      </Fragment>
    </DndProvider>
  );
}

export default App;
