const DisplayDoing = (props) => {
  const filteredList = props.list.filter((task) => task.status === "doing");
  const tasks = filteredList.map((task) => (
    <div className="item" key={task.id}>
      {task.title}
    </div>
  ));

  return (
    <div className="cardContainer">
      <h2>In Progress</h2>
      {tasks}
    </div>
  );
};

export default DisplayDoing;
