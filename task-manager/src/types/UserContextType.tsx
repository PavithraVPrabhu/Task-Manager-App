import type { UserFormData } from "./UserFormDataType";
export interface UserContextType {
  users: UserFormData[];
  loading: boolean;
  error: string | null;
  addUser: (user: UserFormData) => void;
  updateUser: (updatedUser: UserFormData) => void;
  refreshUsers: () => void;
  deleteUser: (id: string) => Promise<void>;

}