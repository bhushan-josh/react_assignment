import { useState } from "react";
import { TasksList } from "./Types";
import ToDo from "./ToDo";
import "./ToDo.css";

const ToDoList: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [tasks, setTasks] = useState<Array<TasksList>>([]);

  const handleSubmit = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), tasks: input, desc: desc, status: false }]);
      setInput("");
      setDesc("");
    }
  };

  const handleDelete = (ele_id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== ele_id));
  };

  const handleComplete = (ele_id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === ele_id) {
          return { ...task, status: !task.status };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <center>
      <div className="card">
        <h1>ToDo App</h1>
        <div className="todo_container">
          <input
            className="input-field"
            type="text"
            value={input}
            placeholder="Enter a task"
            onChange={(event) => setInput(event.target.value)}
          />
           <input
            className="input-field"
            type="text"
            value={desc}
            placeholder="Enter a description"
            onChange={(event) => setDesc(event.target.value)}
          />
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={!input.trim()}
          >
            Add Task
          </button>
        </div>
        <div>
          {tasks.length === 0 ? (
            <p>No tasks yet</p>
          ) : (
            <ToDo
              tasks={tasks}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          )}
        </div>
      </div>
    </center>
  );
};

export default ToDoList;
