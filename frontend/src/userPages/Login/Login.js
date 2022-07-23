import React, { useState, useEffect } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import g_icon from "./../../assets/g_icon.svg";
import background from "./../../assets/background.png";

const Login = () => {
  const [email_log, setEmailLog] = useState("");
  const [password_log, setPasswordLog] = useState("");

  return (
    <div className="LoginDiv">
      <div className="leftpage">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            height: "700px",
            justifyContent: "space-around",
          }}
        >
          <h6
            style={{
              fontFamily: "Cormorant Upright",
              fontWeight: "700",
              fontSize: "50px",
              textTransform: "capitalize",
              color: "#444444",
            }}
          >
            Florería Suecia
          </h6>
          <p
            style={{
              fontFamily: "Nunito",
              fontWeight: "700",
              fontSize: "30px",
              color: "#D96581",
            }}
          >
            Ingresa a tu cuenta
          </p>
          <p
            style={{
              fontFamily: "Nunito",
              fontWeight: "400",
              fontSize: "18px",
              color: "#9BABBF",
            }}
          >
            Ingresa tus datos
          </p>
          <form>
            <label for="email_log">Email</label>
            <br />
            <input
              type="email"
              id="email_log"
              name="email_log"
              value={email_log}
              placeholder="Ingresa tu Email"
              onChange={(e) => setEmailLog(e.target.value)}
            />
            <br />
            <br />

            <label for="email_log">Contraseña</label>
            <br />
            <input
              type="password"
              id="password_log"
              name="password_log"
              value={password_log}
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setPasswordLog(e.target.value)}
            />
          </form>
          <a
            style={{
              fontFamily: "Nunito",
              fontWeight: "700",
              fontSize: "18px",
              color: "#D96581",
              marginTop: "10px",
            }}
          >
            Olvidé mi contraseña
          </a>
          <Link to="home">
            <Button style={{ color: "#ffffff" }}>Ingresar</Button>
          </Link>
          <Button
            style={{ background: "#ffffff", border: "1px solid #D96581" }}
          >
            <img src={g_icon} />
            <p style={{ color: "#D96581" }}>Ingresar con Google</p>
          </Button>
          <div style={{ display: "flex", alignSelf: "center" }}>
            <p
              style={{
                fontFamily: "Nunito",
                fontWeight: "400",
                fontSize: "14px",
                color: "#444444",
                paddingRight: "10px",
              }}
            >
              ¿Aún no tienes cuenta?
            </p>
            <p
              style={{
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "14px",
                color: "#D96581",
              }}
            >
              Regístrate gratis
            </p>
          </div>
        </div>
      </div>
      <div className="rightpage">
        <img src={background} />
      </div>
    </div>
  );
};

export default Login;
