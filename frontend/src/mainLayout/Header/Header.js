import React, { useState } from "react";
//styles
import "./Header.scss";
import { ReactComponent as ReactLogo } from "./../../assets/logo.svg";
import diamond from "./../../assets/diamond.svg";
import searchbar from "./../../assets/searchbar.svg";

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F8F8F8",

  "&:hover": {
    backgroundColor: "#F4F4F4",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#D96581",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "10ch",
      "&:focus": {
        width: "12ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "35ch",
      "&:focus": {
        width: "40ch",
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: "60ch",
      "&:focus": {
        width: "70ch",
      },
    },
  },
}));

const Header = () => {
  const [menu, setMenu] = useState();
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  //redux
  const store = useSelector((state) => state);
  var productCount = 0;
  if (store.orders.productsDetails) {
    productCount = store.orders.productsDetails.length;
  }
  return (
    <div>
      <div className="Header">
        <div className="logo">
          <ReactLogo />
        </div>
        <div className="searchBar">
          <Search>
            <StyledInputBase
              color="#9BABBF"
              placeholder="¿Qué andas buscando?"
              inputProps={{ "aria-label": "search" }}
            />
            <Button>
              <img src={searchbar} />
            </Button>
          </Search>
        </div>
        <div>
          <Button
            style={{
              border: "1px solid #D96581",
              width: "170px",
              justifyContent: "space-evenly",
              borderRadius: "10px",
            }}
          >
            <img style={{ width: "20px" }} src={diamond} />
            <p
              style={{
                color: "#D96581",
                marginBottom: "0",
                textTransform: "none",
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "12px",
              }}
            >
              Suecia Rewards
            </p>
          </Button>
        </div>
        <div className="menu-desktop">
          <span className="productCount">
            <p>{productCount}</p>
          </span>
          <span style={{ justifyContent: "flex-end", marginBottom: "0" }}>
            <img
              src={require("./../../assets/delivery.svg").default}
              alt="Delievry truck"
            />
            <Link style={{ marginBottom: "0" }} to="/category">
              Seguimiento
            </Link>
          </span>
          <span style={{ justifyContent: "flex-end", marginBottom: "0" }}>
            <img
              src={require("./../../assets/cart.svg").default}
              alt="Cart"
              style={{ width: "22px", height: "24.73px" }}
            />

            <Link style={{ marginBottom: "0" }} to="/user/cart">
              Carrito
            </Link>
          </span>
          <span style={{ justifyContent: "flex-end", marginBottom: "0" }}>
            <img
              src={require("./../../assets/user.svg").default}
              alt="User"
              style={{ width: "22px", height: "24px" }}
            />
            <Link style={{ marginBottom: "0" }} to="/user/myaccount">
              Milovan
            </Link>
          </span>
        </div>
        <div className="menuMobile">
          <IconButton aria-label="" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "#D96581" }} />
          </IconButton>
        </div>

        <Drawer
          variant="temporary"
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
        >
          <div
            className="DrawerElements"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "250px",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              padding: "0 2rem",
              margin: "1rem",
              height: "600px",
            }}
          >
            <span style={{ margin: "1rem 0rem" }}>
              <img
                src={require("./../../assets/delivery.svg").default}
                alt="Delievry truck"
              />
              <Link to="/category">Seguimiento</Link>
            </span>
            <span style={{ margin: "1rem 0rem" }}>
              <img
                src={require("./../../assets/cart.svg").default}
                alt="Cart"
                style={{ width: "22px", height: "24.73px" }}
              />
              <Link to="/user/cart">Carrito</Link>
            </span>
            <span style={{ margin: "1rem 0rem" }}>
              <img
                src={require("./../../assets/user.svg").default}
                alt="User"
                style={{ width: "22px", height: "24px" }}
              />
              <Link to="/myaccount">Milovan</Link>
            </span>
          </div>
        </Drawer>
      </div>
      <div style={{ gap: "1.5rem", display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: "20px" }} className="hline"></div>
        <div className="Hlinks">
          <a>Novedades</a>
          <a>Mas Vendidos</a>
          <a>Cumpleaños</a>
          <a>Aniversario</a>
          <a>Menos De $20.000</a>
          <a>Porque Sí</a>
        </div>
        <div className="hline"></div>
      </div>
    </div>
  );
};

export default Header;
