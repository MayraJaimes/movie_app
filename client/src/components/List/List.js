import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div>
      <ul>
        {children}
      </ul>
    </div>
  );
};
