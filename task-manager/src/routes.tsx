import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BoardDetails from "./pages/BoardDetails";
import Settings from "./pages/Settings";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users"
// Check if user is logged in
const isLoggedIn = !!localStorage.getItem("user");

interface AppRoute {
  path: string;
  element: React.ReactNode;
  protected?: boolean;
}

// // Protected Route Wrapper Component
// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const isAuthenticated = !!localStorage.getItem("user");
//   return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
// };

const routes: AppRoute[] = [

  { 
    path: "/login", 
    element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />, 
    protected: false 
  },
  { 
    path: "/signup", 
    element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <SignUp />, 
    protected: false 
  },

 
  {
    path: "/",
    element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />,
    protected: false,
  },

  {
    path: "/dashboard",
    element: (
      // <ProtectedRoute>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      // </ProtectedRoute>
    ),
    protected: true,
  },
  {
    path: "/boarddetails",
    element: (
      // <ProtectedRoute>
        <MainLayout>
          <BoardDetails />
        </MainLayout>
      // </ProtectedRoute>
    ),
    protected: true,
  },
  {
    path: "/settings",
    element: (
      // <ProtectedRoute>
        <MainLayout>
          <Settings />
        </MainLayout>
      // </ProtectedRoute>
    ),
    protected: true,
  },
{
    path: "/users",
    element: (
      // <ProtectedRoute>
        <MainLayout>
          <Users />
        </MainLayout>
      // </ProtectedRoute>
    ),
    protected: true,
  },

  { path: "*", element: <Navigate to="/login" replace /> },
];

export default routes;








