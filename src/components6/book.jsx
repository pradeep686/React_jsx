import React from 'react';
import { Outlet } from "react-router-dom";

export default function Books() {
  return (
    <div>
      <h2>Books</h2>     
      <Outlet /> 
    </div>
  );
}