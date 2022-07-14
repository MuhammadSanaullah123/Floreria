import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import f1 from "./../../assets/f1.svg";
import f2 from "./../../assets/f2.svg";
import f3 from "./../../assets/f3.svg";
import { pink } from "@mui/material/colors";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import delivery from "./../../assets/delivery.svg";

import "./ProductSection.scss";
import { Link } from "react-router-dom";
import { productImages } from "./../../assets/productImages/index";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper

const ProductSection = () => {
  return (
    <div className="sabkapapa">
      <div className="productSection">
        <h1>Nuestros Productos</h1>
        <p style={{ color: "#9BABBF" }}>Encuentra lo que buscas</p>
        <div className="lastslider">
          <ChevronLeftIcon
            style={{ alignSelf: "center" }}
            sx={{ color: pink[300], fontSize: 60 }}
          />
          <div className="dabba" style={{ justifySelf: "self-end" }}>
            <img style={{ width: "100%" }} src={f1} />
            <p
              style={{ fontWeight: "600", color: "#000000", marginTop: "15px" }}
            >
              iEntrega en menos de 2 horas!
            </p>
            <p
              style={{
                color: "#818181",
                fontSize: "12px",
                lineHeight: "0",
                paddingTop: "10px",
              }}
            >
              iCompra hoy, entrega cuando quieras!
            </p>
            <p
              style={{ color: "#D96581", paddingTop: "15px", fontSize: "12px" }}
            >
              {" "}
              Ramo del día
            </p>
            <p
              style={{
                fontWeight: "700",
                color: "#000000",
                fontSize: "17px",
                paddingTop: "10px",
              }}
            >
              {" "}
              $19.990
            </p>
            <div style={{ display: "flex", paddingTop: "10px" }}>
              <Link
                style={{
                  color: "#ffffff",
                  textTransform: "none",
                  backgroundColor: "#D96581",
                  borderRadius: "10px",
                  marginRight: "10px",
                  width: "80%",
                  height: "40px",
                  textAlign: "center",
                }}
                to="/user/category?products=|"
              >
                <Button
                  style={{
                    color: "#ffffff",
                    textTransform: "none",
                    backgroundColor: "#D96581",
                    borderRadius: "10px",
                    marginRight: "10px",
                    width: "80%",
                    height: "40px",
                    fontSize: "12px",
                  }}
                >
                  Agregar al carrito
                </Button>
              </Link>

              <img style={{ width: "20px" }} src={delivery} />
            </div>
          </div>
          <div className="dabba">
            <img style={{ width: "100%" }} src={f2} />
            <p
              style={{ fontWeight: "600", color: "#000000", marginTop: "15px" }}
            >
              iEntrega en menos de 2 horas!
            </p>
            <p
              style={{
                color: "#818181",
                fontSize: "12px",
                lineHeight: "0",
                paddingTop: "10px",
              }}
            >
              iCompra hoy, entrega cuando quieras!
            </p>
            <p
              style={{ color: "#D96581", paddingTop: "15px", fontSize: "12px" }}
            >
              {" "}
              Ramo del día
            </p>
            <p
              style={{
                fontWeight: "700",
                color: "#000000",
                fontSize: "17px",
                paddingTop: "10px",
              }}
            >
              {" "}
              $19.990
            </p>
            <div style={{ display: "flex", paddingTop: "10px" }}>
              <Link
                style={{
                  color: "#ffffff",
                  textTransform: "none",
                  backgroundColor: "#D96581",
                  borderRadius: "10px",
                  marginRight: "10px",
                  width: "80%",
                  height: "40px",
                  textAlign: "center",
                }}
                to="/user/category?products=|"
              >
                <Button
                  style={{
                    color: "#ffffff",
                    textTransform: "none",
                    backgroundColor: "#D96581",
                    borderRadius: "10px",
                    marginRight: "10px",
                    width: "80%",
                    height: "40px",
                    fontSize: "12px",
                  }}
                >
                  Agregar al carrito
                </Button>
              </Link>
              <img style={{ width: "20px" }} src={delivery} />
            </div>
          </div>
          <div className="dabba" style={{ justifySelf: "start" }}>
            <img style={{ width: "100%" }} src={f3} />
            <p
              style={{ fontWeight: "600", color: "#000000", marginTop: "15px" }}
            >
              iEntrega en menos de 2 horas!
            </p>
            <p
              style={{
                color: "#818181",
                fontSize: "12px",
                lineHeight: "0",
                paddingTop: "10px",
              }}
            >
              iCompra hoy, entrega cuando quieras!
            </p>
            <p
              style={{ color: "#D96581", paddingTop: "15px", fontSize: "12px" }}
            >
              {" "}
              Ramo del día
            </p>
            <p
              style={{
                fontWeight: "700",
                color: "#000000",
                fontSize: "17px",
                paddingTop: "10px",
              }}
            >
              {" "}
              $19.990
            </p>
            <div style={{ display: "flex", paddingTop: "10px" }}>
              <Link
                style={{
                  color: "#ffffff",
                  textTransform: "none",
                  backgroundColor: "#D96581",
                  borderRadius: "10px",
                  marginRight: "10px",
                  width: "80%",
                  height: "40px",
                  textAlign: "center",
                }}
                to="/user/category?products=|"
              >
                <Button
                  style={{
                    color: "#ffffff",
                    textTransform: "none",
                    backgroundColor: "#D96581",
                    borderRadius: "10px",
                    marginRight: "10px",
                    width: "80%",
                    height: "40px",
                    fontSize: "12px",
                  }}
                >
                  Agregar al carrito
                </Button>
              </Link>
              <img style={{ width: "20px" }} src={delivery} />
            </div>
          </div>
          <ChevronRightIcon
            style={{ alignSelf: "center" }}
            sx={{ color: pink[300], fontSize: 60 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
