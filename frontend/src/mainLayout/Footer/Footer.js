import React from "react";
//styles
import "./Footer.scss";
import TextField from "./../textField/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ReactComponent as Tiktok } from "./../../assets/tiktok.svg";
import IconButton from "@mui/material/IconButton";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div id="upperFooter">
        <div className="mailingList">
          <h2>Suscríbete a nuestro newsletter</h2>
          <TextField>Suscribirme</TextField>
          <div className="socialMedia">
            <IconButton aria-label="Facebook Handle">
              <FacebookIcon
                style={{ color: "#FFFFFF" }}
                sx={{ fontSize: 40 }}
              />
            </IconButton>
            <IconButton aria-label="Insatgram handle">
              <InstagramIcon
                style={{ color: "#FFFFFF" }}
                sx={{ fontSize: 40 }}
              />
            </IconButton>
            <IconButton aria-label="Tiktok Handle">
              <Tiktok />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <div className="linksSection">
          <div className="main-elements">
            <h4>Servicio al Cliente:</h4>
            <div>
              <a>Seguimiento de pedido</a>
              <a>Cambiar Datos de pedido</a>
              <a>Whatsapp</a>
              <a>Llámanos</a>
              <a>Contacto</a>
            </div>
          </div>
          <div className="main-elements">
            <h4>Florería Suecia</h4>
            <div>
              <a>Sobre Nosotras</a>
              <a>Nuestra Diferencia</a>
              <a>Nuestra Ubicación</a>
              <a>Trabaja Con Nosotras</a>
              <a>Referidas</a>
            </div>
          </div>
          <div className="main-elements">
            <h4>INFORMACION</h4>
            <div>
              <a>Como Comprar</a>
              <a>Preguntas Frecuentas</a>
              <a>Reclamos Y Sugerencias</a>
            </div>
          </div>
          <div className="main-elements">
            <div>
              <h4>Ocasión:</h4>
              <div>
                <div>
                  <a>Cumpleaños</a>
                  <a>Aniversario</a>
                  <a>Condolencias</a>
                  <a>Agradecimiento</a>
                  <a>Porque sí</a>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <h4>Mi Cuenta</h4>
              <a>Acceder A Mi Cuenta</a>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <a>TERMINOS Y CONDICIONES</a>
          <a>POLITICA DE PRIVACIDAD</a>
          <a>POLITICA ENVIOS</a>
          <a>POLITICA DE REEMBOLSOS</a>
        </div>
        <p style={{ color: "#ffffff", paddingTop: "25px" }}>
          FLORERIA SUECIA 2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
