// src/context/UserContext.tsx
import React, { createContext, useState, useEffect, useContext } from "react";
import type { UserFormData } from "../types/UserFormDataType";
import { useApi } from "../hooks/useApi";

interface UserContextType {
  users: UserFormData[];
  loading: boolean;
  error: string | null;
  addUser: (user: UserFormData) => void;
  updateUser: (updatedUser: UserFormData) => void;
  refreshUsers: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, loading, error, execute } = useApi<UserFormData[]>();
  const [users, setUsers] = useState<UserFormData[]>([]);

  const refreshUsers = async () => {
    const result = await execute("http://localhost:5000/users", "GET");
    if (result) setUsers(result);
  };

  useEffect(() => {
    refreshUsers();
  }, []);

  const addUser = (user: UserFormData) => {
    setUsers((prev) => [...prev, user]);
  };

  const updateUser = (updatedUser: UserFormData) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <UserContext.Provider
      value={{ users, loading, error, addUser, updateUser, refreshUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within UserProvider");
  return context;
};
