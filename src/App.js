// import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
function App() {
  const [tasks, setTasks] = useState(["t1", "t2", "t3"]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const inputRef = useRef();

  const handleAddTasks = () => {
    const newTask = inputRef.current.value;
    setTasks([...tasks, newTask]);
    inputRef.current.value = "";
  };

  const handleToggleTask = (task) => {
    if (completedTasks.includes(task)) {
      setCompletedTasks(completedTasks.filter((completedTask) => completedTask !== task));
    } else {
      setCompletedTasks([...completedTasks, task]);
    }
  };

  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
   
    <div className="App flex justify-center items-center h-screen ">

      <div className="flex flex-col items-center border border-black h-[300px]" >
        <h1 class="bg-blue-500 text-white px-4 py-2 text-center w-full">add tasks</h1>
        <ul>
          {tasks.map((item) => {
            const isCompleted = completedTasks.includes(item);
            return (
              <li
                key={item}
                style={{ textDecoration: isCompleted ? "line-through" : "none" }}
                onClick={() => handleToggleTask(item)}
                onDoubleClick={() => handleDeleteTask(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div class="flex mt-auto" >
        <input ref={inputRef} placeholder="add task" class="border border-black px-4 py-2" />
        <button onClick={handleAddTasks} class="bg-blue-500 text-white px-4 py-2">add task</button>
        </div>
      </div>
    </div>
   
  );
  
}

export default App;