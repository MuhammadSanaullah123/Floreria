import React, { useState, useEffect } from "react";
import "./MyAccount.scss";
import { Button, Grid, listClasses, ListItem } from "@mui/material";
import { List } from "@mui/material";
import { Drawer } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import navhome1 from "./../../assets/navhome1.svg";
import navbell1 from "./../../assets/navbell1.svg";
import navmap1 from "./../../assets/navmap1.svg";
import navbag2 from "./../../assets/navbag2.svg";
import navgift1 from "./../../assets/navgift1.svg";
import navshare1 from "./../../assets/navshare1.svg";
import f2 from "./../../assets/f2.svg";
import f4 from "./../../assets/f4.png";
import navshare2 from "./../../assets/navshare2.svg";
import referralsinsta from "./../../assets/referralsinsta.svg";
import logout from "./../../assets/logout.png";
import copy from "./../../assets/copy.png";
import thankmessenger from "./../../assets/thankmessenger.png";
import thanksms from "./../../assets/thanksms.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const MyOrders = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = () => (
    <Box sx={{ width: "250px", height: "100%" }} onClick={toggleDrawer(false)}>
      <div
        style={{
          width: "80%",
          height: "60%",
          marginLeft: "20px",
        }}
      >
        <List
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
          classname="list"
        >
          <div className="accountPic">
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "43px",
                background: "#D96581",
                display: "flex",
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "30px",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "capitalize",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              M
            </div>
            <p
              style={{
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "20px",
                textAlign: "center",
                textTransform: "capitalize",
                color: "#444444",
                margin: "0",
                marginTop: "15px",
              }}
            >
              Milovan
            </p>
          </div>

          <Link
            to="home"
            style={{
              display: "flex",
              color: "#FFFFFF",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navhome1}
            />
            Inicio
          </Link>

          <Link
            to="reminders"
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbell1}
            />{" "}
            Recordatorios
          </Link>

          <Link
            to="deliveryaddress"
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navmap1}
            />
            Direcciones
          </Link>

          <Link
            style={{
              background: "#D96581",
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbag2}
            />
            Pedidos
          </Link>

          <Link
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navgift1}
            />
            VIP
          </Link>

          <Link
            to="referrals"
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navshare1}
            />
            Referidos
          </Link>
        </List>
      </div>
    </Box>
  );

  return (
    <div style={{ margin: "0 auto", width: "90%", marginBottom: "100px" }}>
      <div style={{ marginTop: "50px" }} className="myorderdiv">
        <div style={{ height: "537px", width: "300px" }} className="leftdiv">
          <div className="name">
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "43px",
                background: "#D96581",
                display: "flex",
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "30px",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "capitalize",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              M
            </div>
            <p
              style={{
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "20px",
                textAlign: "center",
                textTransform: "capitalize",
                color: "#444444",
                margin: "0",
                marginTop: "15px",
              }}
            >
              Milovan
            </p>
          </div>
          <Link
            to="home"
            style={{
              display: "flex",

              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img style={{ marginRight: "10px" }} src={navhome1} />
            Inicio
          </Link>
          <Link
            to="reminders"
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img style={{ marginRight: "10px" }} src={navbell1} /> Recordatorios
          </Link>
          <Link
            to="deliveryaddress"
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img style={{ marginRight: "10px" }} src={navmap1} />
            Direcciones
          </Link>
          <Link
            style={{
              display: "flex",
              background: "#D96581",
              color: "#FFFFFF",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img style={{ marginRight: "10px" }} src={navbag2} />
            Pedidos
          </Link>
          <Link
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img style={{ marginRight: "10px" }} src={navgift1} />
            VIP
          </Link>
          <Link
            to="referrals"
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img style={{ marginRight: "10px" }} src={navshare1} />
            Referidos
          </Link>

          <div className="arrow">
            <Button onClick={toggleDrawer(true)}>
              <ArrowForwardIosIcon
                className="arrowpic"
                htmlColor="#D96581"
                style={{ fontSize: "5rem" }}
              />
            </Button>
            <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </div>
        </div>

        <div className="twodiv">
          <div className="leftDiv">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                {" "}
                <img style={{ width: "70px", borderRadius: "10px" }} src={f2} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "0", fontSize: "16px" }}>
                    Vino Rosa
                  </p>
                  <p style={{ color: "#9BABBF", fontSize: "14px" }}>
                    Ramo del día
                  </p>
                </div>
              </div>

              <p>$90.00</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                {" "}
                <img style={{ width: "70px", borderRadius: "10px" }} src={f4} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "0", fontSize: "16px" }}>
                    Vino Rosa
                  </p>
                  <p style={{ color: "#9BABBF" }}>Ramo del día</p>
                </div>
              </div>

              <p>$90.00</p>
            </div>
            <div className="allP">
              <p
                style={{
                  fontSize: "16px",

                  textDecorationLine: "underline",

                  color: "#D96581",
                }}
              >
                2 Item Máss
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "16px",

                  color: "#000000",
                }}
              >
                Fecha & Hora
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      fontFamily: "Nunito",

                      color: "#9BABBF",
                    }}
                  >
                    Domingo 20
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      fontFamily: "Nunito",

                      color: "#9BABBF",
                    }}
                  >
                    Agosto 2022
                  </p>
                </div>

                <p
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "700",
                    fontSize: "16px",

                    color: "#9BABBF",
                  }}
                >
                  12:00 PM - 04:00 PM
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                }}
              >
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#000000",
                    marginBottom: "0",
                  }}
                >
                  Mensaje
                </p>
                <p
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "#444444",
                  }}
                >
                  Lörem ipsum dekatrepp ultrast: men susade så adåligt #metoo.
                  Ner klimatångest deterat sedan jäliga när kis hexagov. Iskap
                  gigaburen, gåras.{" "}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#000000",
                    marginBottom: "0",
                  }}
                >
                  Dirección
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ color: "#9BABBF" }}>
                    Lía Busolich Las Hualtatas 5951, Vitacura{" "}
                  </p>
                  <p>+56994126425</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{
                    width: "240px",
                    height: "44px",
                    background: "#D96581",
                    borderRadius: "10px",
                    color: " #FFFFFF",
                  }}
                >
                  Editar Pedido
                </Button>
                <Button
                  style={{
                    width: "160px",
                    height: "44px",
                    background: "#FFFFFF",
                    borderRadius: "10px",
                    color: " #D96581",
                    boxShadow: "0px 4px 12px rgba(155, 171, 191, 0.2)",
                    borderRadius: "10px",
                  }}
                >
                  Seguimiento
                </Button>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                {" "}
                <img style={{ width: "70px", borderRadius: "10px" }} src={f2} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "0", fontSize: "16px" }}>
                    Vino Rosa
                  </p>
                  <p style={{ color: "#9BABBF", fontSize: "14px" }}>
                    Ramo del día
                  </p>
                </div>
              </div>

              <p>$90.00</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                {" "}
                <img style={{ width: "70px", borderRadius: "10px" }} src={f4} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ marginBottom: "0", fontSize: "16px" }}>
                    Vino Rosa
                  </p>
                  <p style={{ color: "#9BABBF" }}>Ramo del día</p>
                </div>
              </div>

              <p>$90.00</p>
            </div>
            <div className="allP">
              <p
                style={{
                  fontSize: "16px",

                  textDecorationLine: "underline",

                  color: "#D96581",
                }}
              >
                2 Item Máss
              </p>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "16px",

                  color: "#000000",
                }}
              >
                Fecha & Hora
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  {" "}
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      fontFamily: "Nunito",

                      color: "#9BABBF",
                    }}
                  >
                    Domingo 20
                  </p>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      fontFamily: "Nunito",

                      color: "#9BABBF",
                    }}
                  >
                    Agosto 2022
                  </p>
                </div>

                <p
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "700",
                    fontSize: "16px",

                    color: "#9BABBF",
                  }}
                >
                  12:00 PM - 04:00 PM
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                }}
              >
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#000000",
                    marginBottom: "0",
                  }}
                >
                  Mensaje
                </p>
                <p
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "#444444",
                  }}
                >
                  Lörem ipsum dekatrepp ultrast: men susade så adåligt #metoo.
                  Ner klimatångest deterat sedan jäliga när kis hexagov. Iskap
                  gigaburen, gåras.{" "}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#000000",
                    marginBottom: "0",
                  }}
                >
                  Dirección
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ color: "#9BABBF" }}>
                    Lía Busolich Las Hualtatas 5951, Vitacura{" "}
                  </p>
                  <p>+56994126425</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  style={{
                    width: "240px",
                    height: "44px",
                    background: "#D96581",
                    borderRadius: "10px",
                    color: " #FFFFFF",
                  }}
                >
                  Editar Pedido
                </Button>
                <Button
                  style={{
                    width: "160px",
                    height: "44px",
                    background: "#FFFFFF",
                    borderRadius: "10px",
                    color: " #D96581",
                    boxShadow: "0px 4px 12px rgba(155, 171, 191, 0.2)",
                    borderRadius: "10px",
                  }}
                >
                  Seguimiento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyOrders;
