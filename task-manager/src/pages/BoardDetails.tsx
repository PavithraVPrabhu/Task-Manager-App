import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
// import TaskTable from '../components/layout/TaskTable'
import DragAndDrop from '../components/layout/DragAndDrop'
import { useCounterStore } from '../store'
import List from "../components/layout/ReusableListComponent";
import ReusableTableComponent from '../components/layout/ReusableTableComponent'
import type { Column } from '../components/layout/ReusableTableComponent'
import type { Task } from "../types/Task";
import type { Name } from "../types/NameType";
const BoardDetails = () => {

  const { state: themeState, dispatch: themeDispatch } = useContext(ThemeContext)
  const toggleTheme = () => {
    themeDispatch({ type: "TOGGLE_THEME" });
  };

  const count = useCounterStore((state) => (state.count))
  const incrementAsync = useCounterStore((state) => (state.incrementAsync))

  const decrement = useCounterStore((state) => (state.decrement))

  // const sampleTasks = [
  //   { id: 1, title: "Design Login Page", status: "Completed", priority: "High", dueDate: "2025-11-01" },
  //   { id: 2, title: "API Integration", status: "Pending", priority: "Medium", dueDate: "2025-11-05" },
  //   { id: 3, title: "Testing & QA", status: "In Progress", priority: "High", dueDate: "2025-11-07" },

  // ];
  // interface Task{
  //   id:number,
  //   taskname:string,
  //   taskpriority:string
  // }


  const names: Name[] = [{
    name: "abc"
  }]

  const tasks: Task[] = [
    { id: 1, taskname: "seacrh query", taskpriority: "high" },
    { id: 2, taskname: "quick search", taskpriority: "high" }
    , { id: 3, taskname: "fix button", taskpriority: "low" }

  ];

  const taskColumns: Column<Task>[] = [
    { key: "id", header: "ID", render: (tasks) => <b>{tasks.id}</b> },
    { key: "taskname", header: "Task Name", render: (tasks) => <span style={{ color: "red" }}>{tasks.taskname}</span> },
    { key: "taskpriority", header: "Task Priority" },
  ];

  return (
    <div style={{
      backgroundColor: themeState.theme === "light" ? "#f9f9f9" : "#222",
      color: themeState.theme === "light" ? "#000" : "#fff",
      minHeight: "100vh",
      padding: "20px",
      width: "95vw"
    }}>
      <h2><b>Board Details</b></h2>
      <p>Current Count: {count}</p>
      <button onClick={incrementAsync}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <DragAndDrop ></DragAndDrop>
      <ReusableTableComponent data={tasks} columns={taskColumns}></ReusableTableComponent>
      <List items={names}
        renderItem={(item: Name) => <span>{item.name}</span>}>

      </List>
    </div>
  )
}

export default BoardDetails
