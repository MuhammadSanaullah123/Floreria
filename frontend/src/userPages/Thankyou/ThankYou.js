import React, { useState, useEffect } from "react";
// import { withRouter } from "react-router";
import "./ThankYou.scss";
import refer from "./../../assets/Group256.png";
import Ellipse192 from "./../../assets/Ellipse192.png";
import map from "./../../assets/map.png";
import f1 from "./../../assets/f1.svg";
import f2 from "./../../assets/f2.svg";
import f4 from "./../../assets/f4.png";
import f3 from "./../../assets/f3.svg";

import copy from "./../../assets/copy.png";
import thankmessenger from "./../../assets/thankmessenger.png";
import thanksms from "./../../assets/thanksms.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { pink } from "@mui/material/colors";
import Ellipse193 from "./../../assets/Ellipse193.png";
import Vector from "./../../assets/Vector.png";
import Vectorr from "./../../assets/Vectorr.png";
import Rectangle129 from "./../../assets/Rectangle129.png";
import Rectangle69 from "./../../assets/Rectangle69.png";
import { Header, Footer } from "../../mainLayout/mainLayout";
import Grid from "@mui/material/Grid";

const ThankYou = () => {
  return (
    <>
      <div style={{ background: "#ffffff !important" }} className="sabkapapa">
        <div className="one">
          <p className="one-1">Gracias, Andrea</p>
          <p className="one-2">
            Podrás ver el seguimiento de tu pedido en la sección “Mi Cuenta”
            arriba a la derecha
          </p>
          <div className="sabkapapad1"></div>
        </div>
        <div className="two">
          <p className="sabkapapap1">Pedido Realizado</p>
          <p>Hemos aceptado tu pedido y lo estamos preparando.</p>
          <p>
            Se ha enviado un correo electrónico de confirmación a
            abcd@gmail.com.
          </p>
          <p>
            Regrese a esta página para obtener actualizaciones sobre el estado
            de su pedido.
          </p>
        </div>
        <img style={{ width: "60%" }} src={map} />
        <p className="sabkapapap2">Pedido #11685</p>
        <div className="parent">
          <div className="child1">
            <div className="sabkapapad2">
              <img style={{ width: "70px", borderRadius: "10px" }} src={f2} />
              <div className="sabkapapad3">
                <p>Vino Rosa</p>
                <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              </div>
              <p>$90.00</p>
            </div>
            <div className="sabkapapad2">
              <img style={{ width: "70px", borderRadius: "10px" }} src={f4} />
              <div className="sabkapapad3">
                <p>Vino Rosa</p>
                <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              </div>
              <p>$90.00</p>
            </div>
            <div className="sabkapapad2">
              <img style={{ width: "70px", borderRadius: "10px" }} src={f1} />
              <div className="sabkapapad3">
                <p>Vino Rosa</p>
                <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              </div>
              <p>$90.00</p>
            </div>
            <div className="sabkapapad1"></div>
            <div className="sabkapapad4">
              <p style={{ color: "#9BABBF" }}>Subtotal</p>
              <p style={{ color: "#444444" }}>$270.00</p>
            </div>
            <div className="sabkapapad4">
              <p style={{ color: "#9BABBF" }}>Envío</p>
              <p style={{ color: "#444444" }}>$0.00</p>
            </div>
            <div className="sabkapapad1"></div>
            <div className="sabkapapad4">
              <p style={{ color: "#9BABBF" }}>Total</p>
              <p style={{ color: "#444444" }}>$270.00</p>
            </div>
            <div className="sabkapapad1"></div>
            <div className="sabkapapad4">
              <p style={{ color: "#9BABBF" }}>N° de Pedido</p>
              <p style={{ color: "#444444" }}>#11685</p>
            </div>
          </div>
          <div className="child2">
            <p className="sabkapapap3">Información del pedido</p>
            <div style={{ width: "90%" }}>
              <div style={{ display: "flex" }}>
                <div className="sabkapapad5"></div>
                <p style={{ color: "#444444" }}>Dirección de envío</p>
              </div>

              <p style={{ color: "#9BABBF" }}>
                Av Suecia 3134, Depto 1105, Ñuñoa, RM
              </p>
            </div>
            <div style={{ width: "90%" }}>
              <div style={{ display: "flex" }}>
                <div className="sabkapapad5"></div>
                <p style={{ color: "#444444" }}>Rango horario</p>
              </div>

              <p style={{ color: "#9BABBF" }}>16:00-17:00 horas</p>
            </div>
            <div style={{ width: "90%" }}>
              <div style={{ display: "flex" }}>
                <div className="sabkapapad5"></div>
                <p style={{ color: "#444444" }}>Mensaje en tarjeta</p>
              </div>

              <p style={{ color: "#9BABBF" }}>Te Amo Albita...</p>
            </div>
            <div style={{ width: "90%" }}>
              <div style={{ display: "flex" }}>
                <div className="sabkapapad5"></div>
                <p style={{ color: "#444444" }}>Tus datos</p>
              </div>

              <p style={{ color: "#9BABBF" }}>
                Milovan Busolich <br />
                milovan.busolich@gmail.com
                <br />
                +56 9 9938 8926
              </p>
            </div>
          </div>
        </div>
        <p className="Ref">Refiere a alguien</p>
        <p className="sabkapapap4">
          Si conoces a alguien que también podría enviarle flores o un regalo a
          esta persona, o si le gustan las flores en general, ¡házselo saber!{" "}
          <br />
          Recomienda y obtén un 10% de reembolso. Recibes recompensas cuando tus
          amigos hacen una compra.{" "}
        </p>
        <div className="sabkapapad1"></div>
        <div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <form className="form_aba" style={{ display: "flex" }}>
              <div className="first_form" style={{ display: "flex" }}>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email1"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email2"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="second_form" style={{ display: "flex" }}>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email3"
                    placeholder="Email"
                  />
                </div>
                <button className="btn">
                  Recomendar
                  <ArrowForwardIcon
                    className="sabkapapapic1"
                    sx={{ marginLeft: "10px" }}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="sabkapapad1"></div>
        <div className="sabkapapad6">
          <div className="sabkapapad7">
            <img style={{ width: "50px" }} src={copy} />
            <p>Copiar</p>
          </div>
          <div className="sabkapapad7">
            <div className="sabkapapad8">
              <WhatsAppIcon sx={{ color: "#ffffff", fontSize: "30px" }} />
            </div>

            <p>Whatsapp</p>
          </div>
          <div className="sabkapapad7">
            <img style={{ width: "50px" }} src={thankmessenger} />
            <p>Message</p>
          </div>
          <div className="sabkapapad7">
            <div className="sabkapapad8">
              <FacebookIcon sx={{ color: "#ffffff", fontSize: "30px" }} />
            </div>

            <p>Facebook</p>
          </div>
          <div className="sabkapapad7">
            <img style={{ width: "50px" }} src={thanksms} />
            <p>SMS</p>
          </div>
        </div>
        <div style={{ marginTop: "50px" }} className="sabkapapad1"></div>
      </div>
    </>
  );
};

export default ThankYou;
