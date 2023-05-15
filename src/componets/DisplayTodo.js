const DisplayTodo = (props) => {
  const filteredList = props.list.filter((task) => task.status === "todo");
  const tasks = filteredList.map((task) => (
    <div className="item" key={task.id}>
      {task.title}
    </div>
  ));

  return (
    <div className="cardContainer">
      <h2>todo</h2>
      {tasks}
    </div>
  );
};

export default DisplayTodo;
