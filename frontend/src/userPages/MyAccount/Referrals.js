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

          <Link to="myorders" className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbag1}
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

          <Link className="myaccountbox1l1">
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
          <Link to="myorders" className="superdivl2">
            <img style={{ marginRight: "10px" }} src={navbag1} />
            Pedidos
          </Link>
          <Link className="superdivl2">
            <img style={{ marginRight: "10px" }} src={navgift1} />
            VIP
          </Link>
          <Link className="superdivl1">
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
          <h6 className="rightdivh1">Refiere A Alguien</h6>
          <p style={{ color: "#9BABBF" }}>
            Si conoces a alguien que también podría enviarle flores o un regalo
            a esta persona, o si le gustan las flores en general, ¡házselo
            saber!
          </p>
          <p style={{ color: "#9BABBF" }}>
            Recomienda y obtenga un 10% de reembolso. Recibes recompensas cuando
            tus amigos hacen una compra.
          </p>
          <div style={{ marginTop: "100px" }} className="rightdivd1"></div>
          <div className="email">
            <p className="rightdivp1">
              Ej. luisa@gmail.com, marcos@gmail.com, francisca@hotmail.com
            </p>
            <Button className="rightdivb1">
              Recomendar
              <ArrowForwardIcon sx={{ display: "block", marginLeft: "10px" }} />
            </Button>
          </div>
          <div className="rightdivd1"></div>
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
              <div className="ref_s1">
                <div className="rightdivd2">
                  <div className="rightdivd3">
                    <img
                      style={{ width: "20px", height: "16px" }}
                      src={navshare2}
                    />
                  </div>
                  <p>Compartir</p>
                </div>
                <div className="rightdivd2">
                  <div className="rightdivd3">
                    <WhatsAppIcon sx={{ color: "#ffffff", fontSize: "30px" }} />
                  </div>
                  <p>Whatsapp</p>
                </div>
              </div>
              <div className="ref_s2">
                <div className="rightdivd2">
                  <img style={{ width: "50px" }} src={thankmessenger} />
                  <p>Message</p>
                </div>
                <div className="rightdivd2">
                  <div className="rightdivd3">
                    <img style={{ width: "50px" }} src={copy} />
                  </div>
                  <p>Copiar</p>
                </div>
              </div>
              <div className="ref_s3">
                <div className="rightdivd3">
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
