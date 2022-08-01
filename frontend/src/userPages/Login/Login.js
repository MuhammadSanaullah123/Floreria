import React, { useState, useEffect } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

//mui
import Button from "@mui/material/Button";

import { pink } from "@mui/material/colors";
// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/thumbs/thumbs.scss";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
//assets
import g_icon from "./../../assets/g_icon.svg";
import background from "./../../assets/background.png";
import logo from "./../../assets/logo.svg";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  const [email_log, setEmailLog] = useState("");
  const [password_log, setPasswordLog] = useState("");

  return (
    <div className="LoginDiv">
      <div className="leftpage">
        <div className="leftpagediv1">
          <img
            style={{ width: "100px", height: "100px", alignSelf: "center" }}
            src={logo}
          />
          <p className="leftpagep1">Florería Suecia</p>
          <p className="leftpagep2">Ingresa a tu cuenta</p>
          <p className="leftpagep3">Ingresa tus datos</p>
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
          <a className="leftpagea1">Olvidé mi contraseña</a>
          <Link to="home">
            <Button className="leftpageb2">Ingresar</Button>
          </Link>

          <Button className="leftpageb1">
            <GoogleIcon className="googleicon" sx={{ color: pink[300] }} />
            <p>Ingresar con Google</p>
          </Button>

          <div style={{ display: "flex", alignSelf: "center" }}>
            <p className="leftpagep4">¿Aún no tienes cuenta?</p>
            <p className="leftpagep5">Regístrate gratis</p>
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
