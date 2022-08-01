import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
import ProductCard from "./../../mainLayout/ProductCard/ProductCard";
import ProductServices from "../../services/ProductServices";
import useAsync from "../../hooks/useAsync";

import "./ProductSection.scss";
import { Link } from "react-router-dom";
import { productImages } from "./../../assets/productImages/index";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper

const responsive2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <ChevronLeftIcon
        className="left_arr"
        style={{ alignSelf: "center", cursor: "pointer" }}
        sx={{ color: pink[300], fontSize: 60 }}
        onClick={() => previous()}
      />
      <ChevronRightIcon
        className="right_arr"
        style={{ alignSelf: "center", cursor: "pointer" }}
        sx={{ color: pink[300], fontSize: 60 }}
        onClick={() => next()}
      />
    </div>
  );
};

const ProductSection = () => {
  const { data, loading } = useAsync(ProductServices.getAllProducts);
  const tempData = data;

  return (
    <div className="productSection">
      <h1>Nuestros Productos</h1>
      <p style={{ color: "#9BABBF" }}>Encuentra lo que buscas</p>
      <Carousel
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive2}
        infinite={true}
        swipeable={true}
        containerClass="home-carousel h-full"
      >
        {/*   {tempData.map((item, index) => (
          <ProductCard key={index} value={item} />
        ))} */}
        <div className="dabba" style={{ justifySelf: "self-end" }}>
          <img style={{ width: "100%" }} src={f1} />
          <p className="dabbap1">iEntrega en menos de 2 horas!</p>
          <p className="dabbap2">iCompra hoy, entrega cuando quieras!</p>
          <p className="dabbap3"> Ramo del día</p>
          <p className="dabbap4"> $19.990</p>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Link className="dabbaa1" to="/user/category?products=|">
              <Button className="dabbab1">Agregar al carrito</Button>
            </Link>
            <img style={{ width: "20px" }} src={delivery} />
          </div>
        </div>
        <div className="dabba">
          <img style={{ width: "100%" }} src={f2} />
          <p className="dabbap1">iEntrega en menos de 2 horas!</p>
          <p className="dabbap2">iCompra hoy, entrega cuando quieras!</p>
          <p className="dabbap3"> Ramo del día</p>
          <p className="dabbap4"> $19.990</p>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Link className="dabbaa1" to="/user/category?products=|">
              <Button className="dabbab1">Agregar al carrito</Button>
            </Link>
            <img style={{ width: "20px" }} src={delivery} />
          </div>
        </div>
        <div className="dabba" style={{ justifySelf: "start" }}>
          <img style={{ width: "100%" }} src={f3} />
          <p className="dabbap1">iEntrega en menos de 2 horas!</p>
          <p className="dabbap2">iCompra hoy, entrega cuando quieras!</p>
          <p className="dabbap3"> Ramo del día</p>
          <p className="dabbap4"> $19.990</p>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Link className="dabbaa1" to="/user/category?products=licories">
              <Button className="dabbab1">Agregar al carrito</Button>
            </Link>
            <img style={{ width: "20px" }} src={delivery} />
          </div>
        </div>
        <div className="dabba" style={{ justifySelf: "start" }}>
          <img style={{ width: "100%" }} src={f3} />
          <p className="dabbap1">iEntrega en menos de 2 horas!</p>
          <p className="dabbap2">iCompra hoy, entrega cuando quieras!</p>
          <p className="dabbap3"> Ramo del día</p>
          <p className="dabbap4"> $19.990</p>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Link className="dabbaa1" to="/user/category?products=licories">
              <Button className="dabbab1">Agregar al carrito</Button>
            </Link>
            <img style={{ width: "20px" }} src={delivery} />
          </div>
        </div>
        <div className="dabba" style={{ justifySelf: "start" }}>
          <img style={{ width: "100%" }} src={f3} />
          <p className="dabbap1">iEntrega en menos de 2 horas!</p>
          <p className="dabbap2">iCompra hoy, entrega cuando quieras!</p>
          <p className="dabbap3"> Ramo del día</p>
          <p className="dabbap4"> $19.990</p>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Link className="dabbaa1" to="/user/category?products=licories">
              <Button className="dabbab1">Agregar al carrito</Button>
            </Link>
            <img style={{ width: "20px" }} src={delivery} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSection;
