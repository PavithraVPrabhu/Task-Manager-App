// src/pages/Users.jsx
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 


ModuleRegistry.registerModules([AllCommunityModule]);
const Users = () => {
  
  const [rowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  
  const [colDefs] = useState([
    { field: "make", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    { field: "electric", headerName: "Electric", sortable: true, filter: true },
  ]);

  return (
    <div
      className="ag-theme-alpine" // Required theme class
      style={{ height: 400,width: "95vw", margin: "auto", marginTop: "20px" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={5}
      />
    </div>
  );
};

export default Users;
