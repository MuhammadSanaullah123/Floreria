import React, { useState } from "react";
//styles
import "./Header.scss";
import { ReactComponent as ReactLogo } from "./../../assets/logo.svg";
import diamond from "./../../assets/diamond.svg";
import searchbar from "./../../assets/searchbar.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import cross from "./../../assets/cross.svg";
import f2 from "./../../assets/f2.svg";
import special1 from "./../../assets/special1.png";
import special2 from "./../../assets/special2.png";
import special3 from "./../../assets/special3.png";

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
      width: "20ch",
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
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const [menu, setMenu] = useState();
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const [openmodelBox, setopenModelBox] = useState(false);
  const handleCloseBox = () => {
    setopenModelBox(false);
  };
  const handleOpenBox = () => {
    setopenModelBox(true);
  };
  const handlecheckbox1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handlecheckbox2 = (event) => {
    setChecked2(event.target.checked);
  };
  const handlecheckbox3 = (event) => {
    setChecked3(event.target.checked);
  };
  const style = {
    position: "absolute",

    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    borderRadius: "30px",
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: "420px",
    height: "700px",
    left: "50%",
    top: "50%",
    background: "#FFFFFF",
  };

  //redux
  const store = useSelector((state) => state);
  var productCount = 0;
  if (store.orders.productsDetails) {
    productCount = store.orders.productsDetails.length;
  }
  return (
    <div className="mainHeader">
      <div className="Header">
        <div className="logo">
          <Link to="/user/home">
            <ReactLogo />
          </Link>
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
        <div className="rewards">
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
          {/* <span className="productCount">
            <p>{productCount}</p>
          </span> */}
          <span style={{ justifyContent: "flex-end", marginBottom: "0" }}>
            <Link
              style={{
                marginBottom: "0",
                display: "flex",
                flexDirection: "column",
              }}
              to="/user/category"
            >
              <img
                style={{
                  width: "34px",
                  height: "29px",
                }}
                src={require("./../../assets/delivery.svg").default}
                alt="Delievry truck"
              />
              Seguimiento
            </Link>
          </span>
          <span
            onClick={handleOpenBox}
            style={{ justifyContent: "flex-end", marginBottom: "0" }}
          >
            <img
              src={require("./../../assets/cart.svg").default}
              alt="Cart"
              style={{ width: "34px", height: "34px" }}
            />
            <Link
              style={{
                marginBottom: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Carrito
            </Link>
          </span>
          <Modal
            open={openmodelBox}
            //close={handleCloseBox}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="cart_box" sx={style}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "700",
                    fontSize: "18px",
                    color: "#D96581",
                    marginBottom: "0",
                  }}
                >
                  Esto llevas hasta ahora...
                </p>
                <img
                  style={{
                    cursor: "pointer",
                  }}
                  src={cross}
                  onClick={handleCloseBox}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "70px", borderRadius: "10px" }} src={f2} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      Vino Rosa
                    </p>
                    <p
                      style={{
                        //fontFamily: "Nunito",
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      $19.990
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#9BABBF",
                      marginBottom: "0",
                    }}
                  >
                    Ramo del día
                  </p>
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#9BABBF",
                      display: "flex",
                      marginBottom: "0",
                    }}
                  >
                    Cart ID
                    <p
                      style={{
                        fontFamily: "Nunito",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      2839291284
                    </p>
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
                }}
              ></div>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#444444",
                  marginBottom: "0",
                }}
              >
                Hazlo más especial...
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "70px", borderRadius: "10px" }}
                  src={special1}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      Festival Maylar Balloons
                    </p>
                    <p
                      style={{
                        //fontFamily: "Nunito",
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      $4.990
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#D96581",
                        marginBottom: "0",
                        marginLeft: "5px",
                      }}
                    >
                      Ver detalles
                    </a>
                    <input
                      checked={checked1}
                      onChange={handlecheckbox1}
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "6px",
                        fontSize: "16px",
                      }}
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "70px", borderRadius: "10px" }}
                  src={special2}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      Customized Greeting Card
                    </p>
                    <p
                      style={{
                        //fontFamily: "Nunito",
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      $2.390
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#D96581",
                        marginBottom: "0",
                        marginLeft: "5px",
                      }}
                    >
                      Ver detalles
                    </a>
                    <input
                      checked={checked2}
                      onChange={handlecheckbox2}
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "6px",
                        fontSize: "16px",
                      }}
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "70px", borderRadius: "10px" }}
                  src={special3}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      Adorable Plush Teddy Bear
                    </p>
                    <p
                      style={{
                        //fontFamily: "Nunito",
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#444444",
                        marginBottom: "0",
                      }}
                    >
                      $19.990
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <a
                      style={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "16px",
                        color: "#D96581",
                        marginBottom: "0",
                        marginLeft: "5px",
                      }}
                    >
                      Ver detalles
                    </a>
                    <input
                      checked={checked3}
                      onChange={handlecheckbox3}
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "6px",
                        fontSize: "16px",
                      }}
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
                }}
              ></div>
              <Link
                to="/user/cart"
                onClick={handleCloseBox}
                style={{
                  width: "280px",
                  height: "50px",
                  background: "#D96581",
                  borderRadius: "10px",
                  color: "#ffffff",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Ir al Carrito
              </Link>
            </Box>
          </Modal>
          <span style={{ justifyContent: "flex-end", marginBottom: "0" }}>
            <Link
              style={{
                marginBottom: "0",
                display: "flex",
                flexDirection: "column",
              }}
              to="/user/myaccount/home"
            >
              <img
                src={require("./../../assets/user.svg").default}
                alt="User"
                style={{ width: "25.5px", height: "34px" }}
              />
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
              width: "90%",
              alignItems: "flex-start",
              justifyContent: "space-around",
              margin: "1rem",
              height: "350px",
            }}
          >
            <Link
              to="/user/category"
              onClick={toggleDrawer(false)}
              style={{ display: "flex", width: "90%" }}
            >
              <span
                style={{
                  margin: "1rem 0rem",
                  width: "80%",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={require("./../../assets/delivery.svg").default}
                  alt="Delievry truck"
                  style={{ width: "24px", height: "24px" }}
                />
                <p
                  style={{
                    alignSelf: "center",
                    marginBottom: "0",
                    width: "88px",
                  }}
                >
                  Seguimiento
                </p>
              </span>
            </Link>
            <Link
              to="/user/cart"
              onClick={toggleDrawer(false)}
              style={{ display: "flex", width: "90%" }}
            >
              <span
                style={{
                  margin: "1rem 0rem",
                  width: "80%",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={require("./../../assets/cart.svg").default}
                  alt="Cart"
                  style={{ width: "24px", height: "24px" }}
                />
                <p
                  style={{
                    alignSelf: "center",
                    marginBottom: "0",
                    width: "88px",
                  }}
                >
                  Carrito
                </p>
              </span>
            </Link>
            <Link
              to="/user/myaccount/home"
              onClick={toggleDrawer(false)}
              style={{ display: "flex", width: "90%" }}
            >
              <span
                style={{
                  margin: "1rem 0rem",
                  width: "80%",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={require("./../../assets/user.svg").default}
                  alt="User"
                  style={{ width: "24px", height: "24px" }}
                />
                <p
                  style={{
                    alignSelf: "center",
                    marginBottom: "0",
                    width: "88px",
                  }}
                >
                  Milovan
                </p>
              </span>
            </Link>
          </div>
        </Drawer>
      </div>
      <div
        style={{
          gap: "1.5rem",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "90%",
        }}
      >
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
