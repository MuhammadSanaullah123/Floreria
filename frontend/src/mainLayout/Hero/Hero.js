import React from "react";
import "./Hero.scss";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import background from "./../../assets/background.png";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div
        style={{
          background: "#ffffff",
          display: "flex",
          height: "400px",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <div
          className="allP"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "cemter",
          }}
        >
          <p
            style={{
              textTransform: "capitalize",
              fontSize: "50px",
              color: "#444444",
              fontWeight: "500",
              fontFamily: "Cormorant Upright",
              marginBottom: "0",
            }}
          >
            Florería Suecia
          </p>
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
            <Button
              variant="contianed"
              sx={{ fontSize: 20 }}
              style={{
                backgroundColor: "#D96581",
                color: "#ffffff",
                fontSize: "11px",
                borderRadius: "20px",
                textTransform: "none",
                width: "180px",
                height: "40px",
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              Entrega Inmediata
              <ArrowForwardIcon sx={{ color: "#ffffff", marginLeft: "7px" }} />
            </Button>
          </Link>
        </div>
        <div className="big_img">
          <img
            style={{ width: "850px", position: "relative", left: "12%" }}
            src={background}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
