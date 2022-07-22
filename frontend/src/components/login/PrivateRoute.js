import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;

  return (
    <Route
      {...rest}
      render={({ location }) =>
         
          children
        
      }
    />
  );
};

export default PrivateRoute;
