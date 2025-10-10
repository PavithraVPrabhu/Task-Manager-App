import React, { createContext, useReducer } from "react";
import type{ReactNode} from "react";
import type { Board, Task } from "../types/taskTypes";

interface TaskState {
  boards: Board[];
}

type TaskAction =
  | { type: "ADD_BOARD"; payload: Board }
  | { type: "ADD_TASK"; payload: { boardId: string; task: Task } };

const initialState: TaskState = { boards: [] };

function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "ADD_BOARD":
      return { ...state, boards: [...state.boards, action.payload] };
    case "ADD_TASK":
      return {
        ...state,
        boards: state.boards.map((board) =>
          board.id === action.payload.boardId
            ? { ...board, tasks: [...board.tasks, action.payload.task] }
            : board
        ),
      };
    default:
      return state;
  }
}

export const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
}>({ state: initialState, dispatch: () => null });

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
