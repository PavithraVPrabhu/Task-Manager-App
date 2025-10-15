import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { UserFormData } from "../types/UserFormDataType"
import { Button, TextField, Paper } from "@mui/material";
import { useApi } from "../hooks/useApi";

interface UserAppFormProps {
  addNewUser?: (user: UserFormData) => void;
}

const UserAppForm: React.FC<UserAppFormProps> = ({ addNewUser }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const isEditMode = Boolean(id);

  const { data, execute, loading, error } = useApi<UserFormData>();

  useEffect(() => {
    if (isEditMode && id) {
      execute(`http://localhost:5000/users/${id}`, "GET").then((user) => {
        if (user) setFormData(user);
      });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isEditMode && id) {
        await execute(`http://localhost:5000/users/${id}`, "PUT", formData);
        alert("User updated successfully!");
      } else {
        const newUser = await execute("http://localhost:5000/users", "POST", formData);
        alert("User added successfully!");
        addNewUser?.(newUser);
      }
      navigate("/");
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "16px", maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>{isEditMode ? "Edit User" : "Add New User"}</h2>

        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          fullWidth
          margin="normal"
        />
        <TextField
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          fullWidth
          margin="normal"
        />
        <TextField
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" disabled={loading}>
          {isEditMode ? (loading ? "Updating..." : "Update") : loading ? "Submitting..." : "Submit"}
        </Button>

        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </form>
    </Paper>
  );
};

export default UserAppForm;











