import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Card, CardContent, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import List from "../components/layout/ReusableListComponent";
import ReusableTableComponent from "../components/layout/ReusableTableComponent";
import type { Column } from "../components/layout/ReusableTableComponent";
const Dashboard = () => {
  
  type Todo = {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
  };


  const columns: Column<Todo>[] = [
    { key: "id", header: "ID" },
    { key: "todo", header: "Task" },
    { key: "userId", header: "User ID" },
    {
      key: "completed",
      header: "Status",
      render: (todo) => (
        <span style={{ color: todo.completed ? "green" : "red" }}>
          {todo.completed ? "✅ Done" : "❌ Pending"}
        </span>
      ),
    },
  ];

  const { state: themeState } = useContext(ThemeContext);

  const names = ["a", "b", "c"];
  const { isPending, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://dummyjson.com/todos').then((res) =>
        res.json(),
      ),
  })
  const todos: Todo[] = data?.todos ?? [];

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div style={{ padding: "20px", width: "95vw" }}>
      <h2>Dashboard</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '48px'
      }}>
        {data?.todos?.map((todo: any) => (

          <Card key={todo.id} sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6"> {todo.userId}</Typography>
              <Typography variant="body2">{todo.todo}</Typography>
            </CardContent>
          </Card>


        ))}
      </div>

      <List
        items={names}
        renderItem={(name) => <span>{name}</span>}

      />

      <div>
        <ReusableTableComponent data={todos} columns={columns}></ReusableTableComponent>
      </div>

    </div >
  );
};

export default Dashboard;
























