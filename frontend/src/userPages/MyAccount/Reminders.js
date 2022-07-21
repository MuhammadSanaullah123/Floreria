import React, { useState, useEffect } from "react";
import "./MyAccount.scss";
import { Button, Grid, listClasses, ListItem } from "@mui/material";
import { List } from "@mui/material";
import { Drawer } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import navhome1 from "./../../assets/navhome1.svg";
import navbell2 from "./../../assets/navbell2.svg";
import navmap1 from "./../../assets/navmap1.svg";
import navbag1 from "./../../assets/navbag1.svg";
import navgift1 from "./../../assets/navgift1.svg";
import navshare1 from "./../../assets/navshare1.svg";
import dropdownarrow from "./../../assets/dropdownarrow.svg";

import navshare2 from "./../../assets/navshare2.svg";
import f2 from "./../../assets/f2.svg";
import f4 from "./../../assets/f4.png";

import referralsinsta from "./../../assets/referralsinsta.svg";
import logout from "./../../assets/logout.png";
import copy from "./../../assets/copy.png";
import thankmessenger from "./../../assets/thankmessenger.png";
import thanksms from "./../../assets/thanksms.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Reminders = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const [title, setTitle] = useState("");
  const [e_date, setE_date] = useState("");
  const [rem_date, setRem_date] = useState("");
  const [note, setNote] = useState("");

  const [calDate, setCalDate] = React.useState(new Date());
  const list = () => (
    <Box sx={{ width: "250px", height: "100%" }} onClick={toggleDrawer(false)}>
      <div
        style={{
          width: "80%",
          height: "60%",
          marginLeft: "20px",
        }}
      >
        <List
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
          classname="list"
        >
          <div className="accountPic">
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "43px",
                background: "#D96581",
                display: "flex",
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "30px",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "capitalize",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              M
            </div>
            <p
              style={{
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "20px",
                textAlign: "center",
                textTransform: "capitalize",
                color: "#444444",
                margin: "0",
                marginTop: "15px",
              }}
            >
              Milovan
            </p>
          </div>

          <Link
            to="home"
            style={{
              display: "flex",
              color: "#FFFFFF",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navhome1}
            />
            Inicio
          </Link>

          <Link
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              background: "#D96581",
              color: "#ffffff",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbell2}
            />{" "}
            Recordatorios
          </Link>

          <Link
            to="deliveryaddress"
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navmap1}
            />
            Direcciones
          </Link>

          <Link
            to="myorders"
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbag1}
            />
            Pedidos
          </Link>

          <Link
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navgift1}
            />
            VIP
          </Link>

          <Link
            to="referrals"
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              alignItems: "center",
              color: "#9BABBF",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navshare1}
            />
            Referidos
          </Link>
        </List>
      </div>
    </Box>
  );

  return (
    <div style={{ margin: "0 auto", width: "90%", marginBottom: "100px" }}>
      <div style={{ marginTop: "50px" }} className="reminderdiv">
        <div style={{ height: "537px", width: "300px" }} className="leftdiv">
          <div className="name">
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "43px",
                background: "#D96581",
                display: "flex",
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "30px",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "capitalize",
                color: "#FFFFFF",
                marginTop: "10px",
              }}
            >
              M
            </div>
            <p
              style={{
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "20px",
                textAlign: "center",
                textTransform: "capitalize",
                color: "#444444",
                margin: "0",
                marginTop: "15px",
              }}
            >
              Milovan
            </p>
          </div>
          <Link
            to="home"
            style={{
              display: "flex",

              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navhome1}
            />
            Inicio
          </Link>
          <Link
            style={{
              display: "flex",
              background: "#D96581",
              color: "#FFFFFF",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbell2}
            />{" "}
            Recordatorios
          </Link>
          <Link
            to="deliveryaddress"
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navmap1}
            />
            Direcciones
          </Link>
          <Link
            to="myorders"
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbag1}
            />
            Pedidos
          </Link>
          <Link
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navgift1}
            />
            VIP
          </Link>
          <Link
            to="referrals"
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navshare1}
            />
            Referidos
          </Link>

          <div className="arrow">
            <Button onClick={toggleDrawer(true)}>
              <ArrowForwardIosIcon
                className="arrowpic"
                htmlColor="#D96581"
                style={{ fontSize: "5rem" }}
              />
            </Button>
            <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </div>
        </div>

        <div className="leftDiv">
          <div className="calDiv">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={calDate}
                onChange={(newValue) => {
                  setCalDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div
            style={{
              width: "90%",
              height: "2px",
              background:
                "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
            }}
          ></div>
          <div className="event_des">
            <div
              className="ver_line"
              style={{
                width: "6px",
                height: "90px",
                background: "#D96581",
                borderRadius: "10px",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <h6>Agosto 22 - 09:00PM</h6>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#D96581",
                  }}
                >
                  Aniversario de Matrimonio
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#9BABBF",
                    }}
                  >
                    Recordar
                  </p>
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#444444",
                    }}
                  >
                    1 semana antes
                  </p>
                </div>
              </div>
            </div>
            <div className="paragh" style={{ width: "240px", height: "76px" }}>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#444444",
                  margin: "0",
                  lineHeight: "19px",
                }}
              >
                Lörem ipsum spim decid. Lådvinsalkoholism kåfyskap juktiga.
                Decijåst egofas disade endotism fast hov.{" "}
              </p>
            </div>
          </div>
          <div className="event_des">
            <div
              className="ver_line"
              style={{
                width: "6px",
                height: "90px",
                background: "#509D6F",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-around",
                }}
              >
                <h6>Agosto 30 - 12:00AM</h6>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#509D6F",
                  }}
                >
                  Cumpleaños de Jeritza
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#9BABBF",
                    }}
                  >
                    Recordar
                  </p>
                  <p
                    style={{
                      fontFamily: "Nunito",
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#444444",
                    }}
                  >
                    1 semana antes
                  </p>
                </div>
              </div>
            </div>
            <div className="paragh" style={{ width: "240px", height: "76px" }}>
              <p
                style={{
                  fontFamily: "Nunito",
                  fontWeight: "400",
                  fontSize: "14px",
                  color: "#444444",
                  margin: "0",
                  lineHeight: "19px",
                }}
              >
                Lörem ipsum spim decid. Lådvinsalkoholism kåfyskap juktiga.
                Decijåst egofas disade endotism fast hov.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <h6>Añadir Recordatorio</h6>
          <form>
            <label for="title">Título del Recordatorio</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
            <label for="e_date">Event Date</label>
            <br />
            <input
              type="text"
              id="e_date"
              name="e_date"
              value={e_date}
              placeholder="DD / MM / YYYY"
              onChange={(e) => setE_date(e.target.value)}
            />
            <br />
            <br />
            <label for="rem_date">¿Cuantos días antes te recordamos?</label>
            <br />
            <select
              id="rem_date"
              name="rem_date"
              value={rem_date}
              onChange={(e) => setRem_date(e.target.value)}
            >
              <option value="7">7 días</option>
              <option value="6">6 días</option>
              <option value="5">5 días</option>
              <option value="4">4 días</option>
              <option value="3">3 días</option>
              <option value="2">2 días</option>
              <option value="1">1 días</option>
            </select>
            <br />
            <br />
            <label for="fname">Nota (opcional)</label>
            <br />
            <textarea
              rows="4"
              cols="35"
              name="comment"
              form="usrform"
              placeholder="Escribe aquí"
              onChange={(e) => setNote(e.target.value)}
            >
              {note}
            </textarea>
            <br />
            <br />
            <Button
              style={{
                fontFamily: "Nunito",
                width: "100%",
                height: "44px",
                background: "#D96581",
                borderRadius: "10px",
                fontWeight: "400",
                fontSize: "16px",
                color: "#FFFFFF",
                textTransform: "capitalize",
              }}
            >
              Añadir Recordatorio
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Reminders;
