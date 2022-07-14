import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";
import "./MyAccount.scss";
import { Grid } from "@mui/material";
import card from "./../../assets/card.png";
import logout from "./../../assets/logout.png";
import speaker from "./../../assets/speaker.png";
import speaker2 from "./../../assets/speaker2.png";

import cardfb from "./../../assets/cardfb.png";
import instagram from "./../../assets/instagram.png";
import mail from "./../../assets/mail.png";
import mail2 from "./../../assets/mail2.png";

import star from "./../../assets/star.png";
import twitter from "./../../assets/twitter.png";
import whatsapp from "./../../assets/whatsapp.png";
import facebook from "./../../assets/facebook.png";
import link from "./../../assets/link.png";
import messenger from "./../../assets/messenger.png";
import Button from "@mui/material/Button";

import { display } from "@mui/system";
import { Twitter } from "@mui/icons-material";
const MyAccount = () => {
  return (
    <div style={{ margin: "0 auto", width: "90%" }}>
      <div className="superdiv">
        <div className="leftdiv">
          <a style={{ marginTop: "15px" }} href="#">
            Inicio
          </a>
          <a href="#">Pedidos</a>
          <a href="#">Direcciones</a>
          <a href="#">Recordatorios</a>
          <a href="#">Puntos</a>
          <a href="#">Referidos</a>
          <a href="#">Suscripciones</a>
          <a href="#">Soporte</a>
          <div className="line"></div>
          <div className="logdiv">
            <img src={logout} />
            <h6>Log Out</h6>
          </div>
        </div>

        <div className="socialcards">
          <div style={{ gridColumn: "1/2" }} className="carddiv">
            <div className="picback">
              {" "}
              <img
                style={{ width: "36px", height: "27px", marginTop: "10px" }}
                src={card}
              />
            </div>

            <p>
              1 Punto por <strong>$1</strong>
            </p>
          </div>
          <div style={{ gridColumn: "2/3" }} className="carddiv">
            <div className="picback">
              <img src={speaker} className="cardpic" />
            </div>

            <p>
              <strong>200.000 </strong>Puntos
            </p>
          </div>
          <div style={{ gridColumn: "3/4" }} className="carddiv">
            <div className="picback">
              <img src={cardfb} className="cardpic" />
            </div>
            <p>
              <strong>5000 </strong>Puntos
            </p>
          </div>

          <div style={{ gridColumn: "4/5" }} className="carddiv">
            <div className="picback">
              <img src={instagram} className="cardpic" />
            </div>
            <p>
              <strong>10.000 </strong>Puntos
            </p>
          </div>
          <div style={{ gridColumn: "5/6" }} className="carddiv">
            <div className="picback">
              <img src={mail} className="cardpic" />
            </div>
            <p>
              <strong>25.000 </strong>Puntos
            </p>
          </div>
          <div style={{ gridColumn: "6/7" }} className="carddiv">
            <div className="picback">
              <img src={star} className="cardpic" />
            </div>
            <p>
              <strong>20.000 </strong>Puntos
            </p>
          </div>
        </div>

        <div className="buttondiv">
          <div style={{ gridColumn: "1/2" }} className="buttoncard">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "#444444", marginBottom: "0" }}>
              100.000 Puntos
            </p>
            <div
              style={{
                background: "rgba(229, 229, 229, 1)",
                width: "85%",
                height: "0px",
                border: "3px solid #E5E5E5",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(85, 166, 48, 1)",
                  width: "70%",
                  height: "0px",
                  border: "3px solid rgba(85, 166, 48, 1)",
                  borderRadius: "20px",
                  marginLeft: "-5px",
                  marginTop: "-4px",
                }}
              ></div>
            </div>
            <Button className="cardbutton">Se Necesitan Más Puntos</Button>
            {/*  <a className="cardbutton">Se Necesitan Más Puntos</a> */}
          </div>
          <div style={{ gridColumn: "2/3" }} className="buttoncard">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "#444444", marginBottom: "0" }}>
              100.000 Puntos
            </p>
            <div
              style={{
                background: "rgba(229, 229, 229, 1)",
                width: "85%",
                height: "0px",
                border: "3px solid #E5E5E5",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(85, 166, 48, 1)",
                  width: "70%",
                  height: "0px",
                  border: "3px solid rgba(85, 166, 48, 1)",
                  borderRadius: "20px",
                  marginLeft: "-5px",
                  marginTop: "-4px",
                }}
              ></div>
            </div>
            <Button className="cardbutton">Se Necesitan Más Puntos</Button>
          </div>

          <div style={{ gridColumn: "3/4" }} className="buttoncard">
            <p>Cupon de</p>
            <h5>$5000</h5>
            <p style={{ color: "#444444", marginBottom: "0" }}>
              100.000 Puntos
            </p>
            <div
              style={{
                background: "rgba(229, 229, 229, 1)",
                width: "85%",
                height: "0px",
                border: "3px solid #E5E5E5",
                borderRadius: "20px",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(85, 166, 48, 1)",
                  width: "70%",
                  height: "0px",
                  border: "3px solid rgba(85, 166, 48, 1)",
                  borderRadius: "20px",
                  marginLeft: "-5px",
                  marginTop: "-4px",
                }}
              ></div>
            </div>

            <Button className="cardbutton">Se Necesitan Más Puntos</Button>
          </div>
        </div>
        <div className="para">
          <h6
            style={{
              color: "#D96581",
              fontFamily: "Nunito",

              fontWeight: "600",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Tus recompensas
          </h6>
          <p
            style={{
              color: "#444444",

              textAlign: "center",
            }}
          >
            Todavia no has canjeado un cupon de descuento. Tus recompensas
          </p>
        </div>
        <div
          style={{
            width: "90%",
            height: "2px",
            gridColumn: "2/5",
            gridRow: "4/5",
            background:
              "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
          }}
        ></div>
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
              <img src={twitter} />
              <img src={whatsapp} />
              <img src={messenger} />
              <img src={facebook} />
              <img src={mail2} />
              <img src={link} />
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
                <div
                  style={{
                    background: "rgba(229, 229, 229, 1)",
                    width: "160px",
                    height: "0px",
                    border: "3px solid #E5E5E5",
                    borderRadius: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(80, 157, 111, 1)",
                      width: "110px",
                      height: "0px",
                      border: "3px solid rgba(80, 157, 111, 1)",
                      borderRadius: "20px",
                      marginLeft: "-5px",
                      marginTop: "-4px",
                    }}
                  ></div>
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
                <div
                  style={{
                    background: "rgba(229, 229, 229, 1)",
                    width: "160px",
                    height: "0px",
                    border: "3px solid #E5E5E5",
                    borderRadius: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(80, 157, 111, 1)",
                      width: "110px",
                      height: "0px",
                      border: "3px solid rgba(80, 157, 111, 1)",
                      borderRadius: "20px",
                      marginLeft: "-5px",
                      marginTop: "-4px",
                    }}
                  ></div>
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
                <div
                  style={{
                    background: "rgba(229, 229, 229, 1)",
                    width: "160px",
                    height: "0px",
                    border: "3px solid #E5E5E5",
                    borderRadius: "20px",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(80, 157, 111, 1)",
                      width: "110px",
                      height: "0px",
                      border: "3px solid rgba(80, 157, 111, 1)",
                      borderRadius: "20px",
                      marginLeft: "-5px",
                      marginTop: "-4px",
                    }}
                  ></div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div
          style={{
            width: "90%",
            height: "2px",
            marginBottom: "120px",
            gridColumn: "2/5",
            gridRow: "7/8",
            background:
              "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default MyAccount;
