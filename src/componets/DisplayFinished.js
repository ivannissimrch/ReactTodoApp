const DisplayFinished = (props) => {
  const filteredList = props.list.filter((task) => task.status === "finished");
  const tasks = filteredList.map((task) => (
    <div className="item" key={task.id}>
      {task.title}
    </div>
  ));

  return (
    <div className="cardContainer">
      <h2>Completed</h2>
      {tasks}
    </div>
  );
};

export default DisplayFinished;
