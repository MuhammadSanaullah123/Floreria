import React from "react";
import Button from "@mui/material/Button";

import "./textField.scss";

const TextField = (props) => {
  return (
    <div className="textField">
      <input type="text" placeholder="Email" />
      <Button
        variant="contained"
        style={{
          backgroundColor: "rgba(217, 101, 129, 1)",
          color: "#FFFFFF",
          borderRadius: "0.5rem",
          textTransform: "capitalize",
          fontFamily: "Nunito",
          width: "150px",
        }}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default TextField;
