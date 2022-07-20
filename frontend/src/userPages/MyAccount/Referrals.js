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
import navbag1 from "./../../assets/navbag1.svg";
import navgift1 from "./../../assets/navgift1.svg";
import navshare1 from "./../../assets/navshare1.svg";
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
const Referrals = () => {
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
              color: "#9BABBF",
              alignItems: "center",
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
            to="myorders"
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
              src={navbag1}
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
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              background: "#D96581",
              color: "#ffffff",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navshare2}
            />
            Referidos
          </Link>
        </List>
      </div>
    </Box>
  );

  return (
    <div style={{ margin: "0 auto", width: "90%", marginBottom: "100px" }}>
      <div className="superdiv">
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
            to="myorders"
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img style={{ marginRight: "10px" }} src={navbag1} />
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
            style={{
              display: "flex",
              background: "#D96581",
              color: "#FFFFFF",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img style={{ marginRight: "10px" }} src={navshare2} />
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
        <div className="rightdiv">
          <h6
            style={{
              fontFamily: "Nunito",
              fontWeight: "700",
              fontSize: "30px",
              color: "#444444",
            }}
          >
            Refiere A Alguien
          </h6>
          <p style={{ color: "#9BABBF" }}>
            Si conoces a alguien que también podría enviarle flores o un regalo
            a esta persona, o si le gustan las flores en general, ¡házselo
            saber!
          </p>
          <p style={{ color: "#9BABBF" }}>
            Recomienda y obtenga un 10% de reembolso. Recibes recompensas cuando
            tus amigos hacen una compra.
          </p>
          <div
            style={{
              width: "90%",
              height: "2px",
              background:
                "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
              marginTop: "100px",
            }}
          ></div>
          <div
            className="email"
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginTop: "20px",
              width: "90%",
            }}
          >
            <p
              style={{
                fontFamily: "Nunito",
                fontWeight: "400",
                fontSize: "16px",
                color: "#9BABBF",
              }}
            >
              Ej. luisa@gmail.com, marcos@gmail.com, francisca@hotmail.com
            </p>
            <Button
              style={{
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "16px",
                textTransform: "capitalize",
                color: "#FFFFFF",
                background: "#D96581",
                borderRadius: "10px",
                width: "200px",
                height: "50px",
              }}
            >
              Recomendar
              <ArrowForwardIcon sx={{ display: "block", marginLeft: "10px" }} />
            </Button>
          </div>
          <div
            style={{
              width: "90%",
              height: "2px",
              background:
                "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
              marginTop: "20px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <div
              className="wid"
              style={{
                display: "flex",
                width: "500px",

                width: "70%",
              }}
            >
              <div
                className="ref_s1"
                style={{
                  display: "flex",
                  width: "33%",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "#D96581",
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "20px", height: "16px" }}
                      src={navshare2}
                    />
                  </div>

                  <p>Compartir</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "#D96581",
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <WhatsAppIcon sx={{ color: "#ffffff", fontSize: "30px" }} />
                  </div>

                  <p>Whatsapp</p>
                </div>
              </div>
              <div
                className="ref_s2"
                style={{
                  display: "flex",
                  width: "33%",
                  justifyContent: "space-around",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img style={{ width: "50px" }} src={thankmessenger} />
                  <p>Message</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "#D96581",
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img style={{ width: "50px" }} src={copy} />
                  </div>

                  <p>Copiar</p>
                </div>
              </div>

              <div
                className="ref_s3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "23%",
                }}
              >
                <div
                  style={{
                    background: "#D96581",
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "24px", height: "24px" }}
                    src={referralsinsta}
                  />
                </div>

                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Referrals;
