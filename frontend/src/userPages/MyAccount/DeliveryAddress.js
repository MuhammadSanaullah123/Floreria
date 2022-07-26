import React, { useState, useRef } from "react";
import "./MyAccount.scss";
import { Button, Grid, listClasses, ListItem } from "@mui/material";
import { List } from "@mui/material";
import { Drawer } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import TextareaAutosize from "@mui/material/TextareaAutosize";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import addCross from "./../../assets/addCross.svg";
import addEdit from "./../../assets/addEdit.svg";
import questionmark from "./../../assets/questionmark.png";
import cross from "./../../assets/cross.svg";
import addAdd from "./../../assets/addAdd.svg";
import navhome1 from "./../../assets/navhome1.svg";
import navbell1 from "./../../assets/navbell1.svg";
import navmap2 from "./../../assets/navmap2.svg";
import navbag1 from "./../../assets/navbag1.svg";
import navgift1 from "./../../assets/navgift1.svg";
import navshare1 from "./../../assets/navshare1.svg";
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
import Autocomplete from "react-google-autocomplete";
import { AutoComplete, Input } from "antd";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

const DeliveryAddress = () => {
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: "AIzaSyBK93ph5WIzMDsp4EJ6vKBsLGaJFoHGxcs",
    });
  // useEffect(() => {
  //   // fetch place details for the first element in placePredictions array
  //   if (placePredictions.length)
  //     service.placesService?.getDetails(
  //       {
  //         placeId: placePredictions[0].place_id,
  //       },
  //       (placeDetails) => savePlaceDetailsToState(placeDetails)
  //     );
  // }, [placePredictions]);

  //For address model
  const style1 = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1100,
    bgcolor: "background.paper",
    borderRadius: 1,
    p: 4,
  };
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 850,
    height: 720,
    bgcolor: "background.paper",
    borderRadius: "30px",
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "25px 25px 10px 25px",
  };

  const names = [
    "Casa",
    "Departamento",
    "Hotel",
    "Restaurante",
    "Capilla Funeral",
    "Oficina",
    "Hospital",
    "Colegio",
    "Universidad",
    "Banco",
    "Otro",
  ];
  const absent_options = [
    "Dejarlo con vecino",
    "Dejar en conserjería",
    "Llevárselo para programar reenvío (costo adicional)",
  ];
  const [googleaddress, setgoogleAddress] = useState(null);
  const [style_index, setIndex] = useState("");
  const [style_index2, setIndex2] = useState("");

  const [selected2, setSelected2] = useState(false);
  const [textarea3, settextArea3] = useState("");
  const [openmodel1, setopenModel1] = useState(false);
  const [openmodel2, setopenModel2] = useState(false);
  const [booldata, setboolData] = useState();
  const [newAddress, setNewAddress] = useState([]);
  const [personName, setPersonName] = useState([]);
  const [absentName, setAbsentName] = useState([]);
  const [disable, setDisable] = useState(true);
  const [address2, setaddress] = useState([]);
  const handleOpen1 = () => setopenModel1(true);
  const handleClose1 = () => setopenModel1(false);
  const handleOpen2 = () => setopenModel2(true);
  const handleClose2 = () => setopenModel2(false);
  const [inputvalues, setValues] = useState({
    recipientname: "",
    phone: "",
    address: "",
    //calle: "",
    //number: "",
    colonia: "",
    //postalcode: "",
    state: "",
    ciudad: "",
    addresstype: personName,
    absent: absentName,
    reference: "",
  });
  const handleaddressButton = (index) => {
    setaddress(newAddress[index]);
    setSelected2(true);
    setIndex(index);
    //settextArea3(newAddress[index].recipientname);

    settextArea3(
      `${newAddress[index].recipientname}
${newAddress[index].phone}
${newAddress[index].address}
${newAddress[index].calle} ${","}  ${newAddress[index].number}
${newAddress[index].state} ${","}  ${newAddress[index].ciudad}
${newAddress[index].reference}`
    );
  };
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const Value = e.target.value;
    setValues({
      ...inputvalues,
      [e.target.name]: Value,
    });
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setAbsentName(typeof value === "string" ? value.split(",") : value);
  };
  const handleStore = () => {
    var temp = newAddress;
    inputvalues.address = googleaddress.label;
    temp.push(inputvalues);
    setNewAddress(temp);
    setboolData(true);
    setDisable(false);

    handleClose2(true);
    console.log("newAddress:--------->");
    console.log(newAddress);
  };
  //end
  const handleRemove = (index_r) => {
    setIndex2(index_r);
  };
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

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
            to="reminders"
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
              src={navbell1}
            />{" "}
            Recordatorios
          </Link>

          <Link
            style={{
              display: "flex",
              width: "200px",
              height: "50px",
              borderRadius: "10px",
              background: "#D96581",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navmap2}
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
      <div style={{ marginTop: "50px" }} className="deliveryaddressdiv">
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
            to="reminders"
            style={{
              display: "flex",
              width: "260px",
              height: "60px",
              alignItems: "center",
            }}
          >
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbell1}
            />{" "}
            Recordatorios
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
              src={navmap2}
            />
            Direcciones
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
        <div
          className="addDiv"
          style={{ display: "flex", marginBottom: "80px" }}
        >
          {/* <TextareaAutosize
            className="textarea"
            maxRows={5}
            aria-label="maximum height"
            placeholder=""
            style={{
              width: "200px",
              height: "150px",
              background: "#FFFFFF",
              borderRadius: "10px",
              fontSize: "16px",
              color: "#444444",
              fontFamily: "Roboto",
              fontWeight: "400",
              display: `${selected2 ? "block" : "none"}`,
            }}
            value={textarea3}
            onChange={(e) => settextArea3(e.target.value)}
          /> */}

          <div style={{ marginLeft: "20px", display: "flex", width: "100%" }}>
            <div style={{ marginRight: "20px", display: "flex" }}>
              {booldata
                ? newAddress.map((addresses, index) => {
                    return (
                      <div
                        className={`${index}`}
                        key={index}
                        disabled={disable}
                        variant="contained"
                        style={{
                          //display: `${style_index2 === index ? "none" : ""}`,
                          color: "#444444",
                          background: "#F8F8F8",
                          borderRadius: "10px",
                          width: "280px",
                          height: "200px",
                          textTransform: "inherit",
                          padding: "10px",
                          textAlignLast: "start",
                          marginRight: "10px",
                          border: `${
                            style_index === index ? "1px solid #D96581" : " "
                          }`,
                        }}
                        onClick={() => handleaddressButton(index)}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p
                            style={{
                              display: "flex",
                              width: "120px",
                              fontSize: "14px",
                              height: "40px",
                              background: `${
                                style_index === index ? "#ffffff" : "#D96581"
                              }`,
                              color: `${
                                style_index === index ? "#D96581" : "#ffffff"
                              }`,
                              borderRadius: "10px",
                              alignItems: "center",
                              justifyContent: "center",
                              marginLeft: "0",
                            }}
                          >
                            Casa
                          </p>
                          <div style={{ display: "flex" }}>
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                background: "rgba(68, 68, 68, 0.1)",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                              onClick={() => handleRemove(index)}
                            >
                              <img src={addCross} />
                            </div>
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                background: "rgba(217, 101, 129, 0.1)",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <img src={addEdit} />
                            </div>
                          </div>
                        </div>
                        <div key={index}>
                          {`${addresses.recipientname}`}
                          {", "} {`${addresses.address}`}
                          <br />
                          <br />
                          {`${addresses.phone}`} <br />
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <Button
              className="addbtn"
              variant="contained"
              onClick={handleOpen2}
              style={{
                width: "200px",
                height: "200px",
                background: "#D96581",
                borderRadius: "10px",
                fontFamily: "Nunito",
                fontWeight: "400",
                fontSize: "16px",
                textTransform: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img style={{ marginBottom: "10px" }} src={addAdd} />
              Nueva Dirección
            </Button>
            <Modal
              open={openmodel2}
              // onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="box2" sx={style2}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p
                    style={{
                      color: "#D96581",
                      fontWeight: "700",
                      fontFamily: "Nunito",
                      fontSize: "30px",
                      marginBottom: "0",
                    }}
                  >
                    Dirección de envío
                  </p>
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={handleClose2}
                    src={cross}
                  />
                </div>

                <div
                  style={{ height: "100%", paddingTop: "50px" }}
                  className="superdiv"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      value={inputvalues.recipientname}
                      name="recipientname"
                      // key={index}
                      onChange={handleInputChange}
                      variant="outlined"
                      label="Nombre de quien recibe el pedido"
                      size="small"
                      style={{ width: "45%", height: "50px" }}
                    />
                    <TextField
                      value={inputvalues.phone}
                      name="phone"
                      // key={index}
                      onChange={handleInputChange}
                      variant="outlined"
                      label="Teléfono de quien recibe el pedido (opcional)"
                      size="small"
                      style={{ width: "45%", height: "50px" }}
                    />
                    <a
                      style={{ color: "#7A838D" }}
                      title="Info: solo llamaremos en caso de no encontrar a la persona"
                    >
                      <img src={questionmark} height="13px" />
                    </a>
                  </div>
                  <div>
                    <GooglePlacesAutocomplete
                      selectProps={{
                        googleaddress,
                        onPlaceSelected: setgoogleAddress,
                        styles: {
                          menu: (provided, state) => ({
                            ...provided,
                            color: state.selectProps.menuColor,
                            zIndex: "5",
                          }),
                        },
                      }}
                      apiOptions={{ language: "en", region: "en" }}
                      autocompletionRequest={{
                        // bounds: [
                        //   { lat: 50, lng: 50 },
                        //   { lat: 100, lng: 100 }
                        // ],
                        componentRestrictions: {
                          country: ["cl"],
                        },
                      }}
                      name="address"
                      // onChange={handleInputChange}
                      placeholder="Dirección (calle y número):"
                      apiKey="AIzaSyBK93ph5WIzMDsp4EJ6vKBsLGaJFoHGxcs"
                    />
                    {/* <Autocomplete
                      style={{ width: "250px" }}
                      apiKey={'AIzaSyBK93ph5WIzMDsp4EJ6vKBsLGaJFoHGxcs'}
                      onPlaceSelected={(selected, a, c) => {
                        console.log(selected);
                      }}
                      options={{
                        types: ["geocode", "establishment"],
                        componentRestrictions: { country: "pk" },
                      }}
                      defaultValue="Islamabad"
                    /> */}
                  </div>
                  {/*         <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      value={inputvalues.calle}
                      name="calle"
                      // key={index}
                      onChange={handleInputChange}
                      variant="outlined"
                      label="Calle *"
                      size="small"
                      style={{ width: "75%" }}
                    />
                    <TextField
                      value={inputvalues.number}
                      name="number"
                      // key={index}
                      onChange={handleInputChange}
                      variant="outlined"
                      label="Número *"
                      size="small"
                      style={{ width: "20%" }}
                    />
                  </div> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      value={inputvalues.colonia}
                      name="colonia"
                      // key={index}
                      onChange={handleInputChange}
                      variant="outlined"
                      label="Departamento, casa, oficina, capilla, etc. (opcional)
                      "
                      size="small"
                      style={{ width: "100%" }}
                    />
                    {/*  <TextField
                      value={inputvalues.postalcode}
                      name="postalcode"
                      // key={index}
                      onChange={handleInputChange}
                      variant="outlined"
                      label="Código Postal *"
                      size="small"
                      style={{ width: "30%" }}
                    /> */}
                  </div>
                  <div className="formsdiv">
                    <TextField
                      value={inputvalues.state}
                      name="state"
                      // key={index}
                      onChange={handleInputChange}
                      variant="outlined"
                      label="Comuna"
                      size="small"
                      style={{ width: "48%" }}
                    />
                    <TextField
                      value={inputvalues.ciudad}
                      name="ciudad"
                      // key={index}
                      onChange={handleInputChange}
                      variant="outlined"
                      label="Ciudad"
                      size="small"
                      style={{ width: "48%" }}
                    />
                  </div>
                  <div>
                    <FormControl
                      style={{
                        width: "100%",
                        background: "#F8F8F8",
                        borderRadius: "10px",
                      }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-label">
                        Tipo de residencia
                      </InputLabel>
                      <Select
                        name="addresstype"
                        value={personName}
                        labelId="demo-simple-select-label"
                        multiple
                        id="demo-simple-select"
                        label="places"
                        onChange={handleChange}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextareaAutosize
                      name="reference"
                      value={inputvalues.reference}
                      maxRows={5}
                      aria-label="maximum height"
                      placeholder="Referencias sobre la entrega de tu pedido (opcional)"
                      style={{
                        width: "100%",
                        height: "110px",
                        background: "#F8F8F8",
                        borderRadius: "10px",
                        padding: "1rem",
                      }}
                      onChange={handleInputChange}
                    />
                    <FormControl
                      style={{
                        width: "100%",
                        background: "#F8F8F8",
                        borderRadius: "10px",
                      }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-label">
                        ¿Que hacemos si no está la persona que debe recibir el
                        pedido?
                      </InputLabel>
                      <Select
                        name="absent"
                        value={absentName}
                        labelId="demo-simple-select-label"
                        multiple
                        id="demo-simple-select"
                        label="absentperson"
                        onChange={handleChange2}
                      >
                        {absent_options.map((names) => (
                          <MenuItem key={names} value={names}>
                            {names}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <Button
                        style={{
                          width: "280px",
                          height: "50px",
                          background: "#D96581",
                          borderRadius: "10px",
                        }}
                        variant="contained"
                        className="newaddress"
                        onClick={handleStore}
                      >
                        Guardar
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>

            {/* <TextField
                value={address}
                name="address"
                //key={index}
                //onChange={(event) => handleChangeinput(index, event)}
                variant="outlined"
                label="Address"
                style={{
                  width: "100%",
                  margin: "0.8rem 0",
                  display: `${booldata ? "block" : "none"}`,
                }}
              /> */}
            {/* <div
              style={{
                display: `${booldata ? 'block' : 'none'}`,
                border: '1px solid #C4C4C4',
                borderRadius: '5px',
                fontSize: '13px',
                padding: '10px'
              }}
            >
              {`${address.recipientname}`}
              <br />
              {`${address.phone}`} <br />
              {`${address.address}`}
              <br />
              {`${address.calle}`} {`${address.number}`}
              <br />
              {`${address.state}`} {`${address.ciudad}`}
              <br />
              {`${address.reference}`}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeliveryAddress;
