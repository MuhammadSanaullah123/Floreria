import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";
import "./MyAccount.scss";
import { Button, Grid, listClasses, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import navhome1 from "./../../assets/navhome1.svg";
import navhome2 from "./../../assets/navhome2.svg";
import navbell1 from "./../../assets/navbell1.svg";
import navmap1 from "./../../assets/navmap1.svg";
import navbag1 from "./../../assets/navbag1.svg";
import navgift1 from "./../../assets/navgift1.svg";
import navshare1 from "./../../assets/navshare1.svg";

import card from "./../../assets/card.png";
import card2 from "./../../assets/card2.svg";
import logout from "./../../assets/logout.png";
import speaker from "./../../assets/speaker.png";
import speaker_on from "./../../assets/speaker_on.svg";
import speaker2 from "./../../assets/speaker2.png";

import cardfb from "./../../assets/cardfb.png";
import cardfb2 from "./../../assets/cardfb2.svg";
import instagram from "./../../assets/instagram.png";
import instagram2 from "./../../assets/instagram2.svg";
import mail from "./../../assets/mail.png";
import mail_on from "./../../assets/mail_on.svg";
import mail2 from "./../../assets/mail2.png";

import star from "./../../assets/star.png";
import star2 from "./../../assets/star2.svg";
import twitter from "./../../assets/twitter.png";
import whatsapp from "./../../assets/whatsapp.png";
import facebook from "./../../assets/facebook.png";
import link from "./../../assets/link.png";
import messenger from "./../../assets/messenger.png";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { List } from "@mui/material";
import { Drawer } from "@mui/material";
import { Box } from "@mui/material";
import { display } from "@mui/system";
import { Twitter } from "@mui/icons-material";
const MyAccount = () => {
  const [firstcard, setFirstCard] = useState(false);
  const [secondcard, setSecondCard] = useState(false);
  const [thirdcard, setThirdCard] = useState(false);
  const [fourthcard, setFourthCard] = useState(false);
  const [fifthcard, setFifthCard] = useState(false);
  const [sixthcard, setSixthCard] = useState(false);

  const [state, setState] = useState(false);

  const firstselect = () => {
    setFirstCard(!firstcard);
  };
  const secondselect = () => {
    setSecondCard(!secondcard);
  };
  const thirdselect = () => {
    setThirdCard(!thirdcard);
  };
  const fourthselect = () => {
    setFourthCard(!fourthcard);
  };
  const fifthselect = () => {
    setFifthCard(!fifthcard);
  };
  const sixthselect = () => {
    setSixthCard(!sixthcard);
  };

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = () => (
    <Box
      className="myaccountbox1"
      sx={{ width: "250px", height: "100%" }}
      onClick={toggleDrawer(false)}
    >
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

          <Link className="myaccountbox1l1" to="myaccount/home">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navhome2}
            />
            Inicio
          </Link>

          <Link className="myaccountbox1l2" to="reminders">
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
    <div style={{ margin: "0 auto", width: "90%" }}>
      <div className="superdiv">
        <div style={{ width: "300px" }} className="leftdiv">
          <div className="accountPic">
            <div className="superdivd1">M</div>
            <p className="superdivp1">Milovan</p>
          </div>
          <Link className="superdivl1" to="myaccount/home">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navhome2}
            />
            Inicio
          </Link>
          <Link className="superdivl2" to="reminders">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbell1}
            />{" "}
            Recordatorios
          </Link>
          <Link to="deliveryaddress" className="superdivl2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navmap1}
            />
            Direcciones
          </Link>
          <Link to="myorders" className="superdivl2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbag1}
            />
            Pedidos
          </Link>
          <Link className="superdivl2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navgift1}
            />
            VIP
          </Link>
          <Link to="referrals" className="superdivl2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navshare1}
            />
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
        <div className="socialcards">
          <div
            style={{ gridColumn: "1/2" }}
            className={`s1 ${firstcard ? "carddiv2" : "carddiv"}`}
            onClick={firstselect}
          >
            <div className={`${firstcard ? "picback2" : "picback"}`}>
              {" "}
              <img
                style={{ width: "36px", height: "27px" }}
                src={`${firstcard ? card2 : card}`}
              />
            </div>

            <p style={{ fontSize: "16px" }}>
              1 Punto por <strong>$1</strong>
            </p>
          </div>
          <div
            style={{ gridColumn: "2/3" }}
            className={`s2 ${secondcard ? "carddiv2" : "carddiv"}`}
            onClick={secondselect}
          >
            <div className={`${secondcard ? "picback2" : "picback"}`}>
              <img
                src={`${secondcard ? speaker_on : speaker}`}
                className="cardpic"
              />
            </div>

            <p style={{ fontSize: "16px" }}>
              <strong>200.000 </strong>Puntos
            </p>
          </div>
          <div
            style={{ gridColumn: "3/4" }}
            className={`s3 ${thirdcard ? "carddiv2" : "carddiv"}`}
            onClick={thirdselect}
          >
            <div className={`${thirdcard ? "picback2" : "picback"}`}>
              <img
                src={`${thirdcard ? cardfb2 : cardfb}`}
                className="cardpic"
              />
            </div>
            <p style={{ fontSize: "16px" }}>
              <strong>5000 </strong>Puntos
            </p>
          </div>

          <div
            style={{ gridColumn: "4/5" }}
            className={`s4 ${fourthcard ? "carddiv2" : "carddiv"}`}
            onClick={fourthselect}
          >
            <div className={`${fourthcard ? "picback2" : "picback"}`}>
              <img
                src={`${fourthcard ? instagram2 : instagram}`}
                className="cardpic"
              />
            </div>
            <p style={{ fontSize: "16px" }}>
              <strong>10.000 </strong>Puntos
            </p>
          </div>
          <div
            style={{ gridColumn: "5/6" }}
            className={`s5 ${fifthcard ? "carddiv2" : "carddiv"}`}
            onClick={fifthselect}
          >
            <div className={`${fifthcard ? "picback2" : "picback"}`}>
              <img src={`${fifthcard ? mail_on : mail}`} className="cardpic" />
            </div>
            <p style={{ fontSize: "16px" }}>
              <strong>25.000 </strong>Puntos
            </p>
          </div>
          <div
            style={{ gridColumn: "6/7" }}
            className={`s6 ${sixthcard ? "carddiv2" : "carddiv"}`}
            onClick={sixthselect}
          >
            <div className={`${sixthcard ? "picback2" : "picback"}`}>
              <img src={`${sixthcard ? star2 : star}`} className="cardpic" />
            </div>
            <p style={{ fontSize: "16px" }}>
              <strong>20.000 </strong>Puntos
            </p>
          </div>
        </div>

        <div className="buttondiv">
          <div style={{ gridColumn: "1/2" }} className="buttoncard bc1">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "#444444", marginBottom: "0" }}>
              100.000 Puntos
            </p>
            <div className="superdivbar1">
              <div className="superdivbar2"></div>
            </div>
            <Button className="cardbutton">Se Necesitan Más Puntos</Button>
            {/*  <a className="cardbutton">Se Necesitan Más Puntos</a> */}
          </div>
          <div style={{ gridColumn: "2/3" }} className="buttoncard bc2">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "#444444", marginBottom: "0" }}>
              100.000 Puntos
            </p>
            <div className="superdivbar1">
              <div className="superdivbar2"></div>
            </div>
            <Button className="cardbutton">Se Necesitan Más Puntos</Button>
          </div>

          <div style={{ gridColumn: "3/4" }} className="buttoncard bc3">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "#444444", marginBottom: "0" }}>
              100.000 Puntos
            </p>
            <div className="superdivbar1">
              <div className="superdivbar2"></div>
            </div>

            <Button className="cardbutton">Se Necesitan Más Puntos</Button>
          </div>
        </div>
        <div className="para">
          <h6 className="superdivh1">Tus recompensas</h6>
          <p
            style={{
              color: "#444444",
              textAlign: "center",
            }}
          >
            Todavia no has canjeado un cupon de descuento. Tus recompensas
          </p>
        </div>
        <div className="firstLine"></div>
        <div className="speakerdiv">
          <h6>Invitar a amigos</h6>
          <div className="both">
            <div className="speakerdiv2">
              <img src={speaker2} />

              <p style={{ marginLeft: "15px" }}>
                Da a un amigos un $10.000 de descuento
                <br /> en su primera compra y gana 200.000 <br />
                Puntos si gasta mas de $400.000{" "}
              </p>
            </div>
            <div className="socialapp">
              <div className="superdivdiv1">
                <img src={twitter} />
                <img src={whatsapp} />
              </div>
              <div className="superdivdiv1">
                <img src={messenger} />
                <img src={facebook} />
              </div>
              <div className="superdivdiv1">
                <img src={mail2} />
                <img src={link} />
              </div>
            </div>
          </div>
        </div>
        <div className="tablediv">
          <h6>Tu Actividad reciente</h6>
          <table className="table1">
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Accion</th>
              <th>Puntos</th>
              <th>Estado</th>
            </tr>
            <tr>
              <td>20/09/2022</td>
              <td>Actividad</td>
              <td>Suscribete a nuestra lista de correo</td>
              <td>10.000</td>
              <td>
                <div className="superdivbar3">
                  <div className="superdivbar4"></div>
                </div>
              </td>
            </tr>
            <br />
            <tr style={{ border: "1px solid #E5E5E5", margin: "100px" }}></tr>
            <tr>
              <td>20/09/2022</td>
              <td>Actividad</td>
              <td>Suscribete a nuestra lista de correo</td>
              <td>10.000</td>
              <td>
                <div className="superdivbar3">
                  <div className="superdivbar4"></div>
                </div>
              </td>
            </tr>
            <br />
            <tr style={{ border: "1px solid #E5E5E5", margin: "100px" }}></tr>
            <tr>
              <td>20/09/2022</td>
              <td>Actividad</td>
              <td>Suscribete a nuestra lista de correo</td>
              <td>10.000</td>
              <td>
                <div className="superdivbar3">
                  <div className="superdivbar4"></div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="secondLine"></div>
      </div>
    </div>
  );
};

export default MyAccount;
