import React, { useState } from "react";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import BoardDetails from "./pages/BoardDetails";
import Settings from "./pages/Settings";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserAppForm from "./pages/UserAppForm";
import UserDetails from "./pages/UserDetails";
import type { UserFormData } from "./types/UserFormDataType";

const AppRoutes: React.FC = () => {
  const [submittedUsers, setSubmittedUsers] = useState<UserFormData[]>([]);
  const isLoggedIn = !!localStorage.getItem("user");

  const addNewUser = (user: UserFormData) => {
    setSubmittedUsers((prev) => [...prev, user]);
  };

  const router = createBrowserRouter([

     {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />,
    },
    {
      path: "/signup",
      element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <SignUp />,
    },
    {
      
      path: "/",
      element: <AppLayout />,
      
      children: [
       
        {
          path: "/userdetails",
          element: isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <UserDetails  />
          ),
        },
        {
          path: "/users",
          element: isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <UserAppForm/>
          ),
        },
        {
          path: "/users/:id",
          element: isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <UserAppForm />
          ),
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/boarddetails",
          element: <BoardDetails />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          index: true,
          element: isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;


















