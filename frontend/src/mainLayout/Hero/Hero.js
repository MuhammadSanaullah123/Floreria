import React from "react";
import "./Hero.scss";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import background from "./../../assets/background.png";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="Hero"
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <div className="herodiv1">
        <div className="allP">
          <p className="allP1">Florería Suecia</p>
          <p style={{ color: "#9BABBF" }}>
            ¿Necesitas regalar algo y no sabes qué?
          </p>
          <p style={{ color: "#9BABBF" }}>
            Tenemos todo para que puedas elegir el regalo perfecto de forma
            rápida y sencilla.{" "}
          </p>
          <p style={{ color: "#9BABBF" }}>
            Además podemos entregar hoy mismo si deseas
          </p>
          <Link
            to="/user/thankyou"
            style={{ textDecoration: "none", marginTop: "15px" }}
          >
            <Button className="allPb1" variant="contianed">
              Entrega Inmediata
              <ArrowForwardIcon sx={{ color: "#ffffff", marginLeft: "7px" }} />
            </Button>
          </Link>
        </div>
        <div className="big_img">
          <img className="backgroundpic" src={background} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
