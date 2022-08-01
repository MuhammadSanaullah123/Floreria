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
        <List classname="list">
          <div className="accountPic">
            <div className="myaccountbox1d1">M</div>
            <p className="myaccountbox1p1">Milovan</p>
          </div>

          <Link to="home" className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navhome1}
            />
            Inicio
          </Link>

          <Link to="reminders" className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbell1}
            />{" "}
            Recordatorios
          </Link>

          <Link to="deliveryaddress" className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navmap1}
            />
            Direcciones
          </Link>

          <Link className="myaccountbox1l1">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbag2}
            />
            Pedidos
          </Link>

          <Link className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navgift1}
            />
            VIP
          </Link>

          <Link to="referrals" className="myaccountbox1l2">
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
            <div className="superdivd1">M</div>
            <p className="superdivp1">Milovan</p>
          </div>
          <Link to="home" className="superdivl2">
            <img style={{ marginRight: "10px" }} src={navhome1} />
            Inicio
          </Link>
          <Link to="reminders" className="superdivl2">
            <img style={{ marginRight: "10px" }} src={navbell1} /> Recordatorios
          </Link>
          <Link to="deliveryaddress" className="superdivl2">
            <img style={{ marginRight: "10px" }} src={navmap1} />
            Direcciones
          </Link>
          <Link className="superdivl1">
            <img style={{ marginRight: "10px" }} src={navbag2} />
            Pedidos
          </Link>
          <Link className="superdivl2">
            <img style={{ marginRight: "10px" }} src={navgift1} />
            VIP
          </Link>
          <Link to="referrals" className="superdivl2">
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
            <div className="myorderdivd1">
              <div
                style={{
                  display: "flex",
                }}
              >
                {" "}
                <img style={{ width: "70px", borderRadius: "10px" }} src={f2} />
                <div className="myorderdivd2">
                  <p className="myorderdivp1">Vino Rosa</p>
                  <p className="myorderdivp2">Ramo del día</p>
                </div>
              </div>

              <p>$90.00</p>
            </div>
            <div className="myorderdivd1">
              <div style={{ display: "flex" }}>
                {" "}
                <img style={{ width: "70px", borderRadius: "10px" }} src={f4} />
                <div className="myorderdivd2">
                  <p className="myorderdivp1">Vino Rosa</p>
                  <p className="myorderdivp2">Ramo del día</p>
                </div>
              </div>

              <p>$90.00</p>
            </div>
            <div className="allP">
              <p className="myorderdivp3">2 Item Máss</p>
              <p className="myorderdivp4">Fecha & Hora</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  {" "}
                  <p className="myorderdivp5">Domingo 20</p>
                  <p className="myorderdivp6">Agosto 2022</p>
                </div>

                <p className="myorderdivp7">12:00 PM - 04:00 PM</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                }}
              >
                <p className="myorderdivp8">Mensaje</p>
                <p className="myorderdivp9">
                  Lörem ipsum dekatrepp ultrast: men susade så adåligt #metoo.
                  Ner klimatångest deterat sedan jäliga när kis hexagov. Iskap
                  gigaburen, gåras.{" "}
                </p>
              </div>
              <div>
                <p className="myorderdivp10">Dirección</p>
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
                <Button className="myorderdivb1">Editar Pedido</Button>
                <Button className="myorderdivb2">Seguimiento</Button>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <div className="myorderdivd1">
              <div
                style={{
                  display: "flex",
                }}
              >
                {" "}
                <img style={{ width: "70px", borderRadius: "10px" }} src={f2} />
                <div className="myorderdivd2">
                  <p className="myorderdivp1">Vino Rosa</p>
                  <p className="myorderdivp2">Ramo del día</p>
                </div>
              </div>

              <p>$90.00</p>
            </div>
            <div className="myorderdivd1">
              <div style={{ display: "flex" }}>
                {" "}
                <img style={{ width: "70px", borderRadius: "10px" }} src={f4} />
                <div className="myorderdivd2">
                  <p className="myorderdivp1">Vino Rosa</p>
                  <p className="myorderdivp2">Ramo del día</p>
                </div>
              </div>

              <p>$90.00</p>
            </div>
            <div className="allP">
              <p className="myorderdivp3">2 Item Máss</p>
              <p className="myorderdivp4">Fecha & Hora</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  {" "}
                  <p className="myorderdivp5">Domingo 20</p>
                  <p className="myorderdivp6">Agosto 2022</p>
                </div>

                <p className="myorderdivp7">12:00 PM - 04:00 PM</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                }}
              >
                <p className="myorderdivp8">Mensaje</p>
                <p className="myorderdivp9">
                  Lörem ipsum dekatrepp ultrast: men susade så adåligt #metoo.
                  Ner klimatångest deterat sedan jäliga när kis hexagov. Iskap
                  gigaburen, gåras.{" "}
                </p>
              </div>
              <div>
                <p className="myorderdivp10">Dirección</p>
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
                <Button className="myorderdivb1">Editar Pedido</Button>
                <Button className="myorderdivb2">Seguimiento</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyOrders;
