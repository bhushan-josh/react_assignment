import { TaskProps } from "./Types";

const ToDo: React.FC<TaskProps> = ({ tasks, handleDelete, handleComplete }) => {
  return tasks.map((task) => {
    return (
      <div key={task.id}>
        <hr />
        <p>Task: {task.tasks}</p>
        <p>Desc: {task.desc}</p>
        <p>Status: {task.status ? "Completed" : "Not Completed"}</p>

        <button className="success-button" onClick={() => handleComplete(task.id)}>Complete</button>
        <button className="failure-button" onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    );
  });
};

export default ToDo;
