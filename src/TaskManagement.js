import { useState } from "react";
const Taskmanagement = () => {
  const [task, settask] = useState([]);
  const [taskName, settaskName] = useState("");
  const [taskDescription, setdes] = useState("");
  const [taskduedate, settaskduedate] = useState(new Date());

  //To add task:
  const addtask = () => {
    const pretask = [...task];
    let newtask = {
      title: taskName,
      description: taskDescription,
      duedate: taskduedate,
    };
    pretask.push(newtask);
    settask(pretask);
  };
  const handlestarttask = (currentIndex, newstatus) => {
    const oldtask = [...task];
    oldtask[currentIndex].taskstatus = newstatus;
    settask(oldtask);
  };
  const handledeletetask = (index) => {
    let oldtask = [...task];
    let newtask = oldtask.filter((v, i) => i !== index);
    settask(newtask);
  };
  return (
    <>
      <h1>Task Managemaent:</h1>
      <label>Task Title</label>
      <input
        value={taskName}
        onChange={(e) => settaskName(e.target.value)}
        type="text"
        placeholder="Enter your task title"
      />{" "}
      <br />
      <br />
      <label>Task Description: </label>
      <textarea
        value={taskDescription}
        onChange={(e) => setdes(e.target.value)}
        type="text"
        placeholder="Enter Task Description"
      ></textarea>{" "}
      <br />
      <br />
      <label>Task due date: </label>
      <input
        value={taskduedate}
        onChange={(e) => settaskduedate(e.target.value)}
        type="date"
      />{" "}
      <br />
      <br />
      <button
        style={{ backgroundColor: "Green", color: "white" }}
        type="button"
        onClick={() => addtask()}
      >
        Create Task
      </button>
      {task.map((v, i) => {
        return (
          <div key={i}>
            <ul>
              <li>Task Title: {v.title}</li>
              Task Description: {v.description} <br />
              Task Due Date: {v.duedate}
              <button onclick={() => handlestarttask(i, "On-going")}>
                Start task
              </button>
              <button onclick={() => handledeletetask(i)}>Delete task</button>
            </ul>
          </div>
        );
      })}
    </>
  );
};
export default Taskmanagement;

// const handlestarttask = (currentIndex, newstatus) => {
//   const oldtask = [...task];
//   oldtask[currentIndex].taskstatus = newstatus;
//   setbook(oldtask);
// };
// const handledeletetask = (index) => {
//   let oldtask = [...task];
//   let newtask = oldtask.filter((v, i) => i !== index);
//   setbook(newtask);
// };

// <button onclick={() => handlestarttask(i, "On-going")}>Start task</button>
// <button onclick={() => handledeletetask(i)}>Start task</button>
