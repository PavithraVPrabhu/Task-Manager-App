import React, { useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import BoardDetails from "./pages/BoardDetails";
import Settings from "./pages/Settings";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserAppForm from "./pages/UserAppForm";
import UserDetails from "./pages/UserDetails"
import type { UserFormData } from "./types/UserFormDataType";

const AppRoutes: React.FC = () => {
  // ✅ Hook is now inside a React component — valid
  const [submittedUsers, setSubmittedUsers] = useState<UserFormData[]>([]);
  const isLoggedIn = !!localStorage.getItem("user");

  // Function to add new users
  const addNewUser = (user: UserFormData) => {
    setSubmittedUsers((prev) => [...prev, user]);
  };

  // All route definitions
  const routes = [
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />,
    },
    {
      path: "/signup",
      element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <SignUp />,
    },
    {
      path: "/userdetails",
      element: isLoggedIn ? (
        <Navigate to="/dashboard" replace />
      ) : (
        <UserDetails newUsers={submittedUsers} />
      ),
    },
    {
      path: "/users",
      element: isLoggedIn ? (
        <Navigate to="/dashboard" replace />
      ) : (
        <UserAppForm addNewUser={addNewUser} />
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
      path: "/",
      element: isLoggedIn ? (
        <Navigate to="/dashboard" replace />
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    {
      path: "/dashboard",
      element: (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ),
    },
    {
      path: "/boarddetails",
      element: (
        <MainLayout>
          <BoardDetails />
        </MainLayout>
      ),
    },
    {
      path: "/settings",
      element: (
        <MainLayout>
          <Settings />
        </MainLayout>
      ),
    },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];

  // ✅ useRoutes must be called inside a component
  return useRoutes(routes);
};

export default AppRoutes;












// import React ,{useState} from "react";
// import { Navigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import BoardDetails from "./pages/BoardDetails";
// import Settings from "./pages/Settings";
// import MainLayout from "./components/layout/MainLayout";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import UserAppForm from "./pages/UserAppForm";
// import type { UserFormData } from "./types/UserFormDataType";
// import UserDetails from "./pages/UserDetails";

// const isLoggedIn = !!localStorage.getItem("user");
// interface UserDetailsProps {
//   newUsers: UserFormData[];
// }

// interface AppRoute {

//   path: string;
//   element: React.ReactNode;
//   protected?: boolean;
// }

// // // Protected Route Wrapper Component
// // const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
// //   const isAuthenticated = !!localStorage.getItem("user");
// //   return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
// // };

//  const [submittedUsers, setSubmittedUsers] = useState<UserFormData[]>([]);

//   const addNewUser = (user: UserFormData) => {
//     setSubmittedUsers((prev) => [...prev, user]);
//   };
// const routes: AppRoute[] = [

//   { 
//     path: "/login", 
//     element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login />, 
//     protected: false 
//   },
//   { 
//     path: "/signup", 
//     element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <SignUp />, 
//     protected: false 
//   },
//   { 
//     path: "/userdetails", 
//     element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <UserDetails newUsers={submittedUsers} />, 
//     protected: false 
//   },
//  { 
//     path: "/users", 
//     element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <UserAppForm addNewUser={addNewUser} />, 
//     protected: false 
//   },
//  { 
//     path: "/users/:id", 
//     element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <UserAppForm  />, 
//     protected: false 
//   },
 
//   {
//     path: "/",
//     element: isLoggedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />,
//     protected: false,
//   },

//   {
//     path: "/dashboard",
//     element: (
//       // <ProtectedRoute>
//         <MainLayout>
//           <Dashboard />
//         </MainLayout>
//       // </ProtectedRoute>
//     ),
//     protected: true,
//   },
//   {
//     path: "/boarddetails",
//     element: (
//       // <ProtectedRoute>
//         <MainLayout>
//           <BoardDetails />
//         </MainLayout>
//       // </ProtectedRoute>
//     ),
//     protected: true,
//   },
//   {
//     path: "/settings",
//     element: (
//       // <ProtectedRoute>
//         <MainLayout>
//           <Settings />
//         </MainLayout>
//       // </ProtectedRoute>
//     ),
//     protected: true,
//   },
// // {
// //     path: "/users",
// //     element: (
// //       // <ProtectedRoute>
// //         <MainLayout>
// //           <Users />
// //         </MainLayout>
// //       // </ProtectedRoute>
// //     ),
// //     protected: true,
// //   },

//   { path: "*", element: <Navigate to="/login" replace /> },
// ];

// export default routes;








