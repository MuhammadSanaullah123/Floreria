import React, { useEffect, useState } from "react";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import Autocomplete from "react-google-autocomplete";

// scss
import "./Cart.scss";

// component
import StepOne from "./../../mainLayout/Step1/StepOne";
import MapContainer from "./MapContainer";

// mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// Select Menu imports
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import b_arrow from "./../../assets/breadcrumb_arrow.png";
import f1 from "./../../assets/f1.svg";
import f2 from "./../../assets/f2.svg";
import f3 from "./../../assets/f3.svg";
import f4 from "./../../assets/f4.png";
import m1 from "./../../assets/m1.png";
import m2 from "./../../assets/m2.png";
import m3 from "./../../assets/m3.png";
import questionmark from "./../../assets/questionmark.png";
import cross from "./../../assets/cross.svg";
import addAdd from "./../../assets/addAdd.svg";
import btncal from "./../../assets/btncal.png";
import truck from "./../../assets/truck.png";
import home from "./../../assets/home.png";

import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { pink } from "@mui/material/colors";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail } from "../Redux/Reducer";
//redux
import OrderServices from "../../services/OrderServices";
import useAsync from "../../hooks/useAsync";
import { AutoComplete } from "antd";

const ApiPagoFacil = require("@pagofacil/api_pago_facil");
const Signature = require("@pagofacil/sdk-apis-javascript-signature");

const trx = new ApiPagoFacil.TrxsApi();

const tokenService = process.env.TOKEN_SERVICE;
const tokenSecret = process.env.TOKEN_SECRET;

const { v4: uuidv4 } = require("uuid");

const Step2 = ({ handleNext }) => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const products = store.orders.productsDetails;
  console.log("redux", products);

  // Modal State and methods
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [quantity3, setQuantity3] = useState(1);

  const [redirect, setRedirect] = useState("");
  const [style_index, setIndex] = useState("");

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [openmodel1, setopenModel1] = useState(false);
  const [openmodel2, setopenModel2] = useState(false);
  const [openmodel3, setopenmodel3] = useState(false);
  const [openmodelmap, setopenmodelmap] = useState(false);
  const [disable, setDisable] = useState(true);
  const [address2, setaddress] = useState([]);
  const [googleaddress, setgoogleAddress] = useState(null);
  const [booldata, setboolData] = useState();
  const [show, setShow] = useState(false);
  const [newAddress, setNewAddress] = useState([]);
  const [absentName, setAbsentName] = useState([]);
  const [personName, setPersonName] = useState([]);
  const [personalInformation, setPersonalInformation] = useState({
    name: "",
    email: "",
  });
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
  useEffect(() => {
    if (quantity1 < 1) {
      setQuantity1(1);
    }
    if (quantity2 < 1) {
      setQuantity2(1);
    }
    if (quantity3 < 1) {
      setQuantity3(1);
    }
  });
  const [checkedm1, setCheckedm1] = useState(false);
  const [checkedm2, setCheckedm2] = useState(false);
  const [checkedm3, setCheckedm3] = useState(false);
  const [checkedterms, setCheckedterms] = useState(false);
  const [checkedannual, setCheckedannual] = useState(false);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [textarea1, settextArea1] = useState("");
  const [textarea2, settextArea2] = useState("");
  const [textarea3, settextArea3] = useState("");
  const [cardname, setcardName] = useState("");
  const [cardno, setcardno] = useState("");
  const [cardexp, setcardexp] = useState("");
  const [cardcvv, setcardcvv] = useState("");
  // console.log(store.orders.productsDetails[0].price)
  //easy payment API
  const handlePaymentAPI = async () => {
    let postBodyTrx = {
      x_account_id:
        "676f694c6847374b4c68627469364b4976306b61663757677247556b77566558",
      x_amount: 24990,
      x_currency: "CLP",
      x_reference: uuidv4(),
      x_customer_email: "emaildelcliente@pagofacil.cl",
      x_url_complete: "https://postman-echo.com/post",
      x_url_cancel: "https://postman-echo.com/post",
      x_url_callback: "https://postman-echo.com/post",
      x_shop_country: "CL",
      x_session_id: uuidv4(),
    };

    const x_signature = Signature.signPayload(
      postBodyTrx,
      "4c724f5132455538554e6c474e436e494e7559726253704b7673504a58626c59"
    );

    postBodyTrx.x_signature = x_signature;
    console.log(postBodyTrx);
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      "https://apis-dev.pgf.cl/trxs",
      postBodyTrx,
      { headers }
    );
    setRedirect(response.data.data.payUrl[1].url);

    console.log(postBodyTrx);
    console.log(redirect);
  };

  /*   useEffect(() => {
    if (googleaddress != null) {
      const addressVerification = googleaddress.label;
      const numberVerification = googleaddress.value.terms[0].value;
      const calleVerification = googleaddress.value.terms[1].value;
      const coloniaVerification = googleaddress.value.terms[2].value;

      setValues((prevState) => ({
        ...prevState,
        address: addressVerification,
        calle: calleVerification,
        number: numberVerification,
        colonia: coloniaVerification,
      }));
    }
  }, [googleaddress]); */

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleOpen1 = () => setopenModel1(true);
  const handleClose1 = () => setopenModel1(false);
  const handleOpen2 = () => setopenModel2(true);
  const handleClose2 = () => setopenModel2(false);
  const handleOpen3 = () => setopenmodel3(true);
  const handleClose3 = () => setopenmodel3(false);
  const handleOpenMap = () => setopenmodelmap(true);
  const handleCloseMap = () => setopenmodelmap(false);

  const PlaceOrderApi = async () => {
    console.log("working...");
    const headers = {
      "Content-Type": "application/json",
    };
    const body = {
      cart: store.orders.productsDetails,
      address: textarea3,
      email: personalInformation.email,
      total: store.orders.productsDetails[0].price,
      status: "Pending",
    };
    console.log(body);
    const response = await axios.post(
      "http://localhost:5000/api/order/add",
      body,
      { headers }
    );
    console.log(response);
  };

  const handleInputChange = (e) => {
    const Value = e.target.value;
    setValues({
      ...inputvalues,
      [e.target.name]: Value,
    });
  };
  const handleChangeInformation = (e) => {
    const val = e.target.value;
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]: val,
    });
  };

  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [addressname, setaddressname] = useState("");

  const handleStore = () => {
    inputvalues.address = googleaddress.label;

    handleClose2(true);
    handleOpenMap(true);

    setaddressname(googleaddress.label);
    geocodeByAddress(googleaddress.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => (setlatitude(lat), setlongitude(lng)));
  };

  const handleStore2 = () => {
    var temp = newAddress;
    inputvalues.address = googleaddress.label;
    temp.push(inputvalues);
    setNewAddress(temp);
    setboolData(true);
    setDisable(false);
    setShow(true);
    handleCloseMap(true);

    console.log("newAddress:--------->");
    console.log(newAddress);
  };
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
  console.log("Address stored:");
  console.log(address2);

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
  const handlecheckbox1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handlecheckbox2 = (event) => {
    setChecked2(event.target.checked);
  };
  const handlecheckboxm1 = (event) => {
    setCheckedm1(event.target.checked);
  };
  const handlecheckboxm2 = (event) => {
    setCheckedm2(event.target.checked);
  };
  const handlecheckboxm3 = (event) => {
    setCheckedm3(event.target.checked);
  };
  const handlecheckboxterms = (event) => {
    setCheckedterms(event.target.checked);
  };
  const handlecheckboxannual = (event) => {
    setCheckedannual(event.target.checked);
  };
  // style
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
  const style3 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    borderRadius: "10px",

    padding: "15px",
  };
  const style_map = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1400px",
    height: "800px",
    bgcolor: "background.paper",
    borderRadius: "30px",
    p: 4,
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    padding: "42px",
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

  const [valueTab, setValueTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };
  const breadcrumbs2 = [
    <a style={{ color: "#9BABBF" }} key="1" onClick={handleClick}>
      Checkout
    </a>,
    <img style={{ width: "10px" }} src={b_arrow} />,
    <a style={{ color: "#D96581", fontWeight: "600" }} key="2">
      Info Cliente
    </a>,
    <img style={{ width: "10px" }} src={b_arrow} />,
    <a style={{ color: "#9BABBF" }} key="3">
      Fecha y Horario
    </a>,
    <img style={{ width: "10px" }} src={b_arrow} />,
    <a style={{ color: "#9BABBF" }} key="3">
      Card Details
    </a>,
  ];
  useEffect(() => {
    setOpen(true);
    handlePaymentAPI();
  }, []);
  const handleSaveInformation = () => {
    dispatch(setName({ payload: personalInformation.name }));
    dispatch(setEmail({ payload: personalInformation.email }));
    console.log(store.orders.name, store.orders.email);
  };
  // tab Panel Component
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }
  // Props Types for TabPanel
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [suggestion, setSuggestion] = React.useState("");

  const handleSetSuggestion = (event) => {
    setSuggestion(event.target.value);
  };
  return (
    <>
      <div className="Step2">
        <>
          <StepOne value={[open, setOpen]} />
        </>
        <div style={{ marginTop: "20px" }} className="span-1">
          <Stack spacing={2}>
            <Breadcrumbs separator="" aria-label="breadcrumb">
              {breadcrumbs2}
            </Breadcrumbs>
          </Stack>
        </div>
        <div className="span-2">
          <div className="numbers">
            <p
              style={{
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              1. Datos del cliente
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ color: "#9BABBF" }}>Ya tienes una cuenta?</p>
              <p
                style={{
                  color: "#D96581",
                  fontFamily: "Nunito",
                  fontWeight: "900",
                }}
              >
                Ingresar
              </p>
            </div>
          </div>
          <div
            className="upperfirstF"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="firstF" style={{ width: "390px" }}>
              <TextField
                onChange={handleChangeInformation}
                name="name"
                label="Nombre"
                variant="outlined"
                style={{
                  width: "100%",
                  margin: "0.2rem 0",
                  background: "#F8F8F8",
                  borderRadius: "10px",
                }}
                value={personalInformation.name}
              />
            </div>
            <div className="firstF" style={{ width: "390px" }}>
              <TextField
                onChange={handleChangeInformation}
                name="surname"
                label="Apellido"
                variant="outlined"
                style={{
                  width: "100%",
                  margin: "0.2rem 0",
                  background: "#F8F8F8",
                  borderRadius: "10px",
                }}
                value={personalInformation.surname}
              />
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <TextField
              onChange={handleChangeInformation}
              name="telephone"
              label="Teléfono"
              variant="outlined"
              style={{
                width: "100%",
                margin: "0.2rem 0",
                background: "#F8F8F8",
                borderRadius: "10px",
              }}
              value={personalInformation.telephone}
            />
          </div>
          <div>
            <div className="FieldUpperText"></div>
            <TextField
              name="email"
              label="Email"
              onChange={handleChangeInformation}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              style={{
                width: "100%",
                margin: "1rem 0",
                background: "#F8F8F8",
                borderRadius: "10px",
              }}
              value={personalInformation.email}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              style={{ width: "24px", height: "24px", borderRadius: "6px" }}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              style={{ marginLeft: "20px", color: "#444444" }}
              class="form-check-label"
              for="flexCheckDefault"
            >
              Activar recordatorio anual
            </label>
          </div>

          {/*     <div
            style={{
              display: "grid",
              gap: "0.5rem",
            }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "#D96581", color: "white" }}
              onClick={handleSaveInformation}
            >
              Enter
            </Button>
          </div> */}
        </div>
        <div className="span-23">
          <p
            style={{
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "20px",
            }}
          >
            2. Fecha y horario de entrega
          </p>
          <div>
            <div className="time">
              <p style={{ fontSize: "20px" }}>Domingo 20</p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                Agosto 2022
              </p>
              <p style={{ fontSize: "16px" }}>12:00 PM - 04:00 PM</p>
            </div>
          </div>
          <Button
            style={{
              width: "320px",
              height: "50px",
              background: "#D96581",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <img src={btncal} />
          </Button>
        </div>
        <div className="span-3">
          <div className="numbers">
            <p
              style={{
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              3. Entrega del pedido
            </p>
          </div>
          <div
            style={{
              background: "#f8f8f8",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="resp">
              <img
                className="truck"
                style={{
                  position: "relative",
                  top: "80px",
                  left: "70px",
                  zIndex: "5",
                }}
                src={truck}
              />
              <img
                className="home"
                style={{
                  position: "relative",
                  top: "60px",
                  left: "460px",
                  zIndex: "5",
                }}
                src={home}
              />
              <Tabs
                value={valueTab}
                onChange={handleChangeTab}
                aria-label="secondary tabs example"
                className="productDetailTab"
              >
                <Tab {...a11yProps(0)} label="Despacho a domicilio" />
                <Tab {...a11yProps(1)} label="Retira tu compra" />
              </Tabs>
            </div>
            <div className="address" style={{ margin: "0 0.3rem" }}>
              <TabPanel value={valueTab} index={0}>
                <div>
                  <div className="onlyP" style={{ width: "740px" }}>
                    <p
                      style={{
                        fontFamily: "Nunito",
                        fontStyle: "normal",
                        fontWeight: "900",
                        fontSize: "20px",
                      }}
                    >
                      ¿Donde enviamos este pedido?
                    </p>
                  </div>
                  <div
                    style={{
                      marginLeft: "20px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        marginRight: "20px",
                        background: "#FFFFFF",

                        borderRadius: "10px",
                        display: `${show ? "flex" : "none"}`,
                      }}
                    >
                      {booldata
                        ? newAddress.map((addresses, index) => {
                            return (
                              <div
                                className={`${index}`}
                                key={index}
                                disabled={disable}
                                variant="contained"
                                style={{
                                  background: "#FFFFFF",
                                  borderRadius: "10px",
                                  width: "200px",

                                  textTransform: "inherit",
                                  padding: "10px",
                                  textAlignLast: "start",
                                  marginRight: "10px",
                                  fontFamily: "Roboto",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                  padding: "1rem",
                                  border: `${
                                    style_index === index
                                      ? "1px solid #D96581"
                                      : " "
                                  }`,
                                  color: `${
                                    style_index === index
                                      ? "#D96581"
                                      : "#9BABBF"
                                  }`,
                                }}
                                onClick={() => handleaddressButton(index)}
                              >
                                <div key={index}>
                                  {`${addresses.recipientname}`}
                                  <br /> {`${addresses.address}`}
                                  <br /> <br />
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
                        height: "150px",
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
                      <p style={{ marginBottom: "0" }}>Nueva Dirección</p>
                    </Button>
                    <Modal
                      style={{
                        overflowX: "auto",
                      }}
                      open={openmodel2}
                      // onClose={handleClose2}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className="box2" sx={style2}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
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
                            style={{
                              cursor: "pointer",
                            }}
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
                            <Autocomplete
                              selectProps={{
                                googleaddress,
                                onChange: setgoogleAddress,
                                styles: {
                                  menu: (provided, state) => ({
                                    ...provided,
                                    color: state.selectProps.menuColor,
                                    zIndex: "5",
                                  }),
                                },
                              }}
                              name="address"
                              // onChange={handleInputChange}
                              placeholder="Dirección (calle y número):"
                              apiKey="AIzaSyBK93ph5WIzMDsp4EJ6vKBsLGaJFoHGxcs"
                              options={{
                                types: ["(regions)"],
                                componentRestrictions: { country: "ru" },
                              }}
                            />
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
                              label="Departamento, casa, oficina, capilla, etc. (opcional)"
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
                                ¿Que hacemos si no está la persona que debe
                                recibir el pedido?
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
                    <Modal
                      open={openmodelmap}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className="box_map" sx={style_map}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <img onClick={handleCloseMap} src={cross} />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "1220px",
                            alignSelf: "center",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "Nunito",
                              fontWeight: "700",
                              fontSize: "30px",
                              color: "#D96581",
                            }}
                          >
                            Confirma la dirección
                          </p>
                          <div
                            style={{
                              width: "1220px",
                              height: "500px",
                              borderRadius: "30px",
                              alignSelf: "center",
                            }}
                          >
                            <MapContainer
                              lat={latitude}
                              lng={longitude}
                              name={addressname}
                            />
                          </div>
                          <Button
                            onClick={handleStore2}
                            style={{
                              width: "280px",
                              height: "50px",
                              background: "#D96581",
                              borderRadius: "10px",
                              color: "#ffffff",
                              fontFamily: "Nunito",
                              fontWeight: "500",
                              fontSize: "24px",
                              textTransform: "capitalize",
                              marginTop: "50px",
                              alignSelf: "end",
                            }}
                          >
                            Guardar
                          </Button>
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
              </TabPanel>
              <TabPanel value={valueTab} index={1}></TabPanel>
            </div>

            {/* <div className="radioSelection">
              <input type="radio" id="html" value="Retiro en tienda" />
              <label for="html">Retiro en tienda</label>
            </div> */}
          </div>
        </div>
        <div className="span-4">
          <div className="numbers">
            <p
              style={{
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              4. Mensaje (opcional)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input
              checked={checked1}
              onChange={handlecheckbox1}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "6px",
                fontSize: "16px",
              }}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              style={{
                marginLeft: "20px",
                color: "#444444",
                fontFamily: "Nunito",
              }}
              class="form-check-label"
              for="flexCheckDefault"
            >
              No enviar tarjeta
            </label>
          </div>
          <Box
            className="firstForm"
            sx={{ minWidth: 120, display: `${checked1 ? "none" : "block"}` }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sugerencia</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={suggestion}
                label="Sugerencia"
                onChange={handleSetSuggestion}
              >
                {/* <MenuItem value={10}>Ten</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
          <p
            style={{
              color: "#D96581",
              fontFamily: "Nunito",
              alignSelf: "end",
              fontWeight: "700",
              fontSize: "16px",
              marginTop: "10px",
              display: `${checked1 ? "none" : "block"}`,
            }}
          >
            Vista previa
          </p>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Escribe aquí..."
            style={{
              width: "799px",
              height: "183px",
              background: "#F8F8F8",
              borderRadius: "10px",
              display: `${checked1 ? "none" : "block"}`,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <input
                checked={checked2}
                onChange={handlecheckbox2}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                style={{
                  marginLeft: "20px",
                  color: "#444444",
                  fontFamily: "Nunito",
                }}
                class="form-check-label"
                for="flexCheckDefault"
              >
                No enviar tarjeta
              </label>
            </div>
            <div style={{ display: `${checked2 ? "none" : "block"}` }}>
              <a
                style={{ color: "#7A838D" }}
                title="Si deseas enviar como anónimo, firma como quieras o envía sin firma"
              >
                <img src={questionmark} height="13px" />
              </a>
            </div>
          </div>

          <TextField
            className="secondForm"
            id="outlined-basic"
            label="Firma la tarjeta con el nombre que quieras."
            variant="outlined"
            style={{
              width: "799px",
              height: "48px",
              background: "#F8F8F8",
              borderRadius: "10px",
              display: `${checked2 ? "none" : "block"}`,
            }}
          />
        </div>
        <div className="span-45">
          <p
            style={{
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: "900",
              fontSize: "20px",
            }}
          >
            5. Método de Pago
          </p>
          <div className="tripleDiv">
            <div
              className="subDiv"
              style={{
                display: "flex",
                alignItems: "center",
                width: "35%",
                justifyContent: "space-around",
              }}
            >
              <input
                checked={checkedm1}
                onChange={handlecheckboxm1}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
                class="form-check-input"
                type="checkbox"
                value=""
              />
              <img src={m1} />
              <p style={{ margin: "0", width: "130px" }}>Mercado Pago</p>
            </div>
          </div>
          <div
            style={{
              marginTop: "15px",
            }}
            className="tripleDiv"
          >
            <div
              className="subDiv"
              style={{
                display: "flex",
                alignItems: "center",
                width: "35%",
                justifyContent: "space-around",
              }}
            >
              <input
                checked={checkedm2}
                onChange={handlecheckboxm2}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
                class="form-check-input"
                type="checkbox"
                value=""
              />
              <img src={m2} />
              <p style={{ margin: "0", width: "130px" }}>WebPay</p>
            </div>
          </div>
          <div
            style={{
              marginTop: "15px",
            }}
            className="tripleDiv"
          >
            <div
              className="subDiv"
              style={{
                display: "flex",
                alignItems: "center",
                width: "35%",
                justifyContent: "space-around",
              }}
            >
              <input
                checked={checkedm3}
                onChange={handlecheckboxm3}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
                class="form-check-input"
                type="checkbox"
                value=""
              />
              <img src={m3} />
              <p style={{ margin: "0", width: "130px" }}>Tarjeta de Crédito</p>
            </div>
          </div>
          <div className="lastCheckboxDiv">
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                checked={checkedterms}
                onChange={handlecheckboxterms}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
                class="form-check-input"
                type="checkbox"
                value=""
              />
              <p
                style={{
                  display: "flex",
                  marginLeft: "10px",
                  alignItems: "center",
                  marginBottom: "0",
                }}
              >
                Acepto los
                <p
                  style={{
                    color: "#D96581",
                    marginBottom: "0",
                    marginRight: "5px",
                    fontWeight: "700",
                  }}
                >
                  Términos y Condiciones
                </p>
                de Florería Suecia
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <input
                checked={checkedannual}
                onChange={handlecheckboxannual}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
                class="form-check-input"
                type="checkbox"
                value=""
              />
              <p
                style={{
                  display: "flex",
                  marginLeft: "10px",
                  alignItems: "center",
                  marginBottom: "0",
                }}
              >
                Activar
                <p
                  style={{
                    color: "#D96581",
                    marginBottom: "0",
                    marginRight: "5px",
                    fontWeight: "700",
                  }}
                >
                  recordatorio anual
                </p>
                de Florería Suecia
              </p>
            </div>
          </div>
        </div>
        <div className="span-5">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
          >
            <img style={{ width: "70px", borderRadius: "10px" }} src={f2} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "-170px",
              }}
            >
              <p style={{ marginBottom: "0" }}>Vino Rosa</p>
              <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <RemoveIcon
                  onClick={() => setQuantity1(quantity1 - 1)}
                  sx={{ color: pink[400] }}
                />
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    background: "#9BABBF",
                    borderRadius: "6px",
                  }}
                ></div>
                <p
                  style={{
                    marginLeft: "0",
                    fontWeight: "700",
                    color: "#444444",
                    fontFamily: "Poppins",
                  }}
                >
                  {quantity1}
                </p>
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    background: "#9BABBF",
                    borderRadius: "6px",
                  }}
                ></div>
                <AddIcon
                  onClick={() => setQuantity1(quantity1 + 1)}
                  sx={{ color: pink[400] }}
                />
              </div>
            </div>
            <p>$90.00</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
          >
            <img style={{ width: "70px", borderRadius: "10px" }} src={f4} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "-170px",
              }}
            >
              <p style={{ marginBottom: "0" }}>Vino Rosa</p>
              <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <RemoveIcon
                  onClick={() => setQuantity2(quantity2 - 1)}
                  sx={{ color: pink[400] }}
                />
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    background: "#9BABBF",
                    borderRadius: "6px",
                  }}
                ></div>
                <p
                  style={{
                    marginLeft: "0",
                    fontWeight: "700",
                    color: "#444444",
                    fontFamily: "Poppins",
                  }}
                >
                  {quantity2}
                </p>
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    background: "#9BABBF",
                    borderRadius: "6px",
                  }}
                ></div>
                <AddIcon
                  onClick={() => setQuantity2(quantity2 + 1)}
                  sx={{ color: pink[400] }}
                />
              </div>
            </div>
            <p>$90.00</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
          >
            <img style={{ width: "70px", borderRadius: "10px" }} src={f1} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "-170px",
              }}
            >
              <p style={{ marginBottom: "0" }}>Vino Rosa</p>
              <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <RemoveIcon
                  onClick={() => setQuantity3(quantity3 - 1)}
                  sx={{ color: pink[400] }}
                />
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    background: "#9BABBF",
                    borderRadius: "6px",
                  }}
                ></div>
                <p
                  style={{
                    marginLeft: "0",
                    fontWeight: "700",
                    color: "#444444",
                    fontFamily: "Poppins",
                  }}
                >
                  {quantity3}
                </p>
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    background: "#9BABBF",
                    borderRadius: "6px",
                  }}
                ></div>
                <AddIcon
                  onClick={() => setQuantity3(quantity3 + 1)}
                  sx={{ color: pink[400] }}
                />
              </div>
            </div>
            <p>$90.00</p>
          </div>
          <Button
            className="bigbtn"
            style={{
              width: "420px",
              height: "50px",
              fontFamily: "Poppins",
              background: "#D96581",
              borderRadius: "10px",
              fontWeight: "500",
              fontSize: "14px",
              textTransform: "capitalize",
              color: "#FFFFFF",
            }}
          >
            Complementar pedido
          </Button>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
              width: "80%",
              height: "2px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Cupón de descuento"
              variant="outlined"
              style={{
                width: "300px",
                height: "50px",
                background: "#F8F8F8",
                borderRadius: "10px",
              }}
            />
            <Button
              style={{
                width: "100px",
                height: "50px",
                fontFamily: "Poppins",
                background: "#D96581",
                borderRadius: "10px",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "capitalize",
                color: "#FFFFFF",
              }}
            >
              Aplicar
            </Button>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
              width: "80%",
              height: "2px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <p style={{ color: "#9BABBF" }}>Subtotal</p>
            <p style={{ color: "#444444" }}>$27.990</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <p style={{ color: "#9BABBF" }}>Envío</p>
            <p style={{ color: "#444444" }}>$4.990</p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
              width: "80%",
              height: "2px",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <p style={{ color: "#9BABBF" }}>Total</p>
            <p
              style={{
                color: "#444444",
                fontWeight: "600",

                lineHeight: "22px",
              }}
            >
              $32.980
            </p>
          </div>
        </div>
        <div className="span-6">
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
              width: "95%",
              height: "2px",
              marginBottom: "15px",
            }}
          ></div>

          <Button
            onClick={handleOpen3}
            variant="contained"
            className="buttonViolet"
            style={{
              backgroundColor: "#D96581",
              width: "800px",
              height: "60px",
              textTransform: "none",
              borderRadius: "10px",
              fontFamily: "Poppins",

              fontWeight: "400",
              fontSize: "22px",
              lineHeight: "33px",
            }}
          >
            Finalizar Compra - $32.980
          </Button>

          <Modal
            open={openmodel3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style3}>
              {" "}
              <div className="paymentspan">
                <div
                  class="alert alert-info text-justify"
                  style={{
                    background: "#f0d8b6",
                    width: "86%",
                    alignSelf: "center",
                  }}
                >
                  <p style={{ fontSize: "13px", color: "#837c3f" }}>
                    Es posible que la información que nos proporciones sea
                    <br /> validada por uno de nuestros agentes.
                  </p>
                </div>
                {products.map((product, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={`${product.images}`}
                        alt="productImage"
                        width="100px"
                        height="150px"
                        style={{ height: "100px" }}
                      />
                      <div>
                        <h6 style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {product.productName}
                        </h6>
                        <p className="productdDetails">
                          <p style={{ fontWeight: 600, marginLeft: 0 }}>
                            SHIPPING DATE & TIME:
                            <br />
                            <span style={{ fontWeight: 500 }}>
                              {product.date} {product.month} <br />{" "}
                              {product.time}
                            </span>
                          </p>
                        </p>
                      </div>
                      <p
                        style={{
                          alignSelf: "center",
                          fontSize: "17px",
                          fontWeight: 700,
                        }}
                      >{`$${product.price}`}</p>
                    </div>
                  );
                })}
                <hr />
                <div>
                  <p style={{ textAlign: "center", fontSize: "17px" }}>
                    1 Pago de{" "}
                    <strong>
                      {/*{`$${store.orders.productsDetails[0].price}`} MXN*/}
                    </strong>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ fontSize: "8px" }}>
                      Aceptamos las siguientes tarjetas de debito
                    </div>
                    <div>
                      <img
                        style={{ width: "30px" }}
                        src="https://dlu1537hrr98t.cloudfront.net/content/paymentmethods/V03/visa_logo.png"
                      />
                      <img
                        style={{ width: "30px" }}
                        src="https://dlu1537hrr98t.cloudfront.net/content/paymentmethods/V03/masterd_card_logo.png"
                      />
                      <img
                        style={{ width: "30px" }}
                        src="https://dlu1537hrr98t.cloudfront.net/content/paymentmethods/V03/amex_logo.png"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  variant="contained"
                  className="buttonViolet"
                  style={{ width: "100%" }}
                >
                  <a
                    href={redirect}
                    target="_blank"
                    // onClick={PlaceOrderApi}
                    style={{ color: "white" }}
                  >
                    {" "}
                    Continuar
                  </a>
                </Button>
                <Button
                  // onClick={handleNext}
                  variant="contained"
                  className="buttonViolet"
                  style={{ width: "100%", backgroundColor: "#777" }}
                >
                  Regresar al carrito
                </Button>
              </div>
            </Box>
          </Modal>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
              width: "95%",
              height: "2px",
              marginTop: "15px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Step2;

/* export default GoogleApiWrapper({
  apiKey: "AIzaSyBK93ph5WIzMDsp4EJ6vKBsLGaJFoHGxcs",
})(Step2);
 */
