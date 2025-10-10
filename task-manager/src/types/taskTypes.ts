export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  status: "todo" | "in-progress" | "done";
}

export interface Board {
  id: string;
  name: string;
  tasks: Task[];
}
