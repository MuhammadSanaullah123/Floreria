import React from "react";
import { pink } from "@mui/material/colors";
import Carousel from "react-multi-carousel";
import {
  createFromIconfontCN,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "react-multi-carousel/lib/styles.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import clock from "./../../assets/clock.png";
import alarm from "./../../assets/alarm.png";
import search from "./../../assets/search.png";
import bell from "./../../assets/bell.png";
import gift from "./../../assets/gift.png";
import calender from "./../../assets/calender.png";
import timer from "./../../assets/timer.png";

import "./Service.scss";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
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
const Service = () => {
  return (
    <div className="Service">
      <h1 style={{ paddingTop: "50px" }}>¿Por qué elegirnos?</h1>
      <p
        style={{
          color: "#9BABBF",
          textAlign: "center",
          paddingBottom: "100px",
        }}
      >
        No solo entregamos flores. Nos preocupamos
      </p>
      <Carousel
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        infinite={true}
        containerClass="home-carousel h-full"
        temClass="py-4"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #444444",
              borderRadius: "50%",
              width: "160px",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={clock} />
          </div>
          <p className="bottomp">Entrega Inmediata</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #444444",
              borderRadius: "50%",
              width: "160px",
              height: "160px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#D96581",
                fontSize: "15px",
                fontWeight: "700",
                marginBottom: "0",
              }}
            >
              {"<"}2
            </p>
            <p
              style={{
                color: "#D96581",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              {" "}
              horas
            </p>
          </div>
          <p className="bottomp">Entrega en menos de 2 horas</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #444444",
              borderRadius: "50%",
              width: "160px",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={alarm} />
          </div>
          <p className="bottomp">Atención 24/7</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #444444",
              borderRadius: "50%",
              width: "160px",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={search} />
          </div>
          <p className="bottomp">Seguimiento en Tiempo Real</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #444444",
              borderRadius: "50%",
              width: "160px",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={bell} />
          </div>
          <p className="bottomp">Notificación de Entrega</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #444444",
              borderRadius: "50%",
              width: "160px",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={gift} />
          </div>
          <p className="bottomp">Puntos por tus compras</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #444444",
              borderRadius: "50%",
              width: "160px",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={calender} />
          </div>
          <p className="bottomp">Recordatorios de fechas importantes</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid #444444",
              borderRadius: "50%",
              width: "160px",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={timer} />
          </div>
          <p className="bottomp">
            Entrega en horario acotado (ej. entrega de 4 a 5 pm)
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Service;
