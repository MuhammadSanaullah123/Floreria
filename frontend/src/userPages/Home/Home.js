import React, { useState, useEffect } from "react";
import Hero from "../../mainLayout/Hero/Hero";
import "./Home.scss";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import calender from "./../../assets/calender.svg";
import dividedflowers from "./../../assets/dividedflowers.png";
import whatsapp_fix from "./../../assets/whatsapp_fix.png";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductSection from "../../mainLayout/ProductSection/ProductSection";
import Service from "../../mainLayout/Service/Service";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Thumbs } from "swiper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { pink } from "@mui/material/colors";
// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import { Carousel } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//  const contentStyle = {
//    height: '700px',
//  color: '#fff',
//  lineHeight: '160px',
//  textAlign: 'center',
//  background: '#364d79',
//  };
const Home = () => {
  const [dotPosition, setDotPosition] = React.useState("right");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [priceFilter, setPriceFilter] = useState();

  const handlePriceFilter = (event) => {
    setPriceFilter(event.target.value);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* <Carousel  dotPosition="right">
         <div style={contentStyle}>
          <div className="landingContainer">
        <Hero />
      <div style={{ display: "flex", justifyContent: "center" }} className="emptyDiv">

        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }} className="modalContainer">
          <Grid item xs={12} sm={12} md={2}>
            <Typography variant="h6" style={{ color: "#FFFFFF", fontSize: "1rem" }}>BUSCA TU REGALO</Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={2} >
            <TextField
              id=""
              label="Comuna"
              variant="filled"
              placeholder="A que comuna envias"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "0.3rem", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <TextField
              id=""
              label="Ocasión"
              placeholder="Cumpleanos"
              variant="filled"
              size="medium"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "0.3rem", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <TextField
              id=""
              label="Fecha y hora de entrega"
              placeholder="lunas, 21 feb"
              variant="filled"
              style={{ backgroundColor: "#FFFFFF", borderRadius: "0.3rem", width: "100%" }}
            />
          </Grid> 
          <Grid item xs={12} sm={12} md={2}>
            <Button variant="contained" style={{ backgroundColor: "#72509D", color: "#FFFFFF", padding: "0.2rem 1rem" }}>
              encontrar regalo
            </Button>
          </Grid>
        </Grid>
      </div>
      </div>
        </div> 
        <div style={contentStyle}>
          <ProductSection />
        </div >
        <div style={contentStyle}>
          <Service />
        </div>
        
      </Carousel> */}

      {/* <Carousel  dotPosition="right"> */}

      <div className="landingContainer">
        <Hero />
        <div className="emptyDiv">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 0 }}
            className="modalContainer"
          >
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <Typography className="modalCP1" variant="h6">
                BUSCA TU REGALO
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={2}>
              <p style={{ color: "#C8CED4" }}>¿Donde envías?</p>

              <input
                style={{ borderRadius: "10px" }}
                className="modalCI1"
                type="email"
                class="form-control"
                id="email1"
                placeholder="Comuna"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={2}>
              <p style={{ color: "#C8CED4" }}>Ocasión</p>
              <FormControl style={{ borderRadius: "10px" }} className="form1">
                <InputLabel>Ocasion</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priceFilter}
                  label="Age"
                  onChange={handlePriceFilter}
                  style={{
                    height: "40px",
                    fontSize: "20px",
                  }}
                >
                  <MenuItem value={1}>Anniversary</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={2}>
              <p style={{ color: "#C8CED4" }}>¿Cuando debe llegar?</p>

              <button className="modalCb1">
                Lunas, 21 feb
                <img style={{ width: "20px" }} src={calender} />
              </button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <p style={{ color: "#C8CED4", visibility: "hidden" }}>HIDDEN</p>

              <Button className="modalCb2" variant="contained">
                Encontrar Egalo
              </Button>
            </Grid>
          </Grid>
        </div>
        <img className="whatsapp" src={whatsapp_fix} />
      </div>

      <div className="beta">
        <ProductSection />
      </div>

      <div className="alpha">
        <Service />
      </div>
      <div className="lastDiv">
        <h1>Nosotras</h1>
        <div style={{ width: "80%" }}>
          <p>
            En Florería Suecia estamos orgullosos de entregar la experiencia de
            enviar flores en línea, recordando a las personas lo especial que es
            enviar y recibir flores.
          </p>
          <p>
            Nuestro objetivo es combinar un servicio de entrega de flores
            hermoso, flexible y fácil de usar con la magia que solo nuestras
            excelentes floristas pueden brindar a nuestros bellos ramos y
            arreglos.
          </p>
          <p>
            Seleccionamos cuidadosamente cada flor con las que trabajamos para
            asegurarnos de mantener una altísima calidad y ofrecer una increíble
            experiencia en las flores o regalos que envíes a tus seres queridos.
          </p>
        </div>
        <img style={{ marginTop: "50px" }} src={dividedflowers} />
      </div>
      {/* </Carousel> */}

      {/* <div style={{ margin: "0 auto" }}>
        <Service />
      </div>  */}
    </div>
  );
};

export default Home;
