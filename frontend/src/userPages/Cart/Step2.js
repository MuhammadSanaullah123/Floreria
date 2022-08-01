import React, { useEffect, useState } from "react";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// scss
import "./Cart.scss";

// component
import StepOne from "./../../mainLayout/Step1/StepOne";
import AddressModal from "../../components/cart/AddressModal";
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
  const [openmodel3, setopenmodel3] = useState(false);
  const [disable, setDisable] = useState(true);
  const [address2, setaddress] = useState([]);
  const [booldata, setboolData] = useState();
  const [show, setShow] = useState(false);
  const [personalInformation, setPersonalInformation] = useState({
    name: "",
    email: "",
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
  const [openmodel2, setopenModel2] = useState(false);
  const [openmodelmap, setopenmodelmap] = useState(false);
  const [newAddress, setNewAddress] = useState([]);

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
  const handleOpen3 = () => setopenmodel3(true);
  const handleClose3 = () => setopenmodel3(false);

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

  const handleChangeInformation = (e) => {
    const val = e.target.value;
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]: val,
    });
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
            <p className="span2p1">1. Datos del cliente</p>
            <div style={{ display: "flex" }}>
              <p style={{ color: "#9BABBF" }}>Ya tienes una cuenta?</p>
              <p className="span2p2">Ingresar</p>
            </div>
          </div>
          <div
            className="upperfirstF"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="firstF" style={{ width: "390px" }}>
              <TextField
                className="span2t1"
                onChange={handleChangeInformation}
                name="name"
                label="Nombre"
                variant="outlined"
                value={personalInformation.name}
              />
            </div>
            <div className="firstF" style={{ width: "390px" }}>
              <TextField
                className="span2t1"
                onChange={handleChangeInformation}
                name="surname"
                label="Apellido"
                variant="outlined"
                value={personalInformation.surname}
              />
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <TextField
              className="span2t1"
              onChange={handleChangeInformation}
              name="telephone"
              label="Teléfono"
              variant="outlined"
              value={personalInformation.telephone}
            />
          </div>
          <div>
            <div className="FieldUpperText"></div>
            <TextField
              className="span2t1"
              name="email"
              label="Email"
              onChange={handleChangeInformation}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={personalInformation.email}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="span2i1"
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
        </div>
        <div className="span-23">
          <p className="span23p1">2. Fecha y horario de entrega</p>
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
          <Button className="span23b1">
            <img src={btncal} />
          </Button>
        </div>
        <div className="span-3">
          <div className="numbers">
            <p className="span3p1">3. Entrega del pedido</p>
          </div>
          <div className="span3d1">
            <div className="resp">
              <img className="truck" src={truck} />
              <img className="home" src={home} />
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
                    <p className="span3p2">¿Donde enviamos este pedido?</p>
                  </div>
                  <div className="span3d2">
                    <div
                      className="span3d3"
                      style={{
                        display: `${show ? "flex" : "none"}`,
                      }}
                    >
                      {booldata
                        ? newAddress.map((addresses, index) => {
                            return (
                              <div
                                className={`${index} span3d4`}
                                key={index}
                                disabled={disable}
                                variant="contained"
                                style={{
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
                    >
                      <img style={{ marginBottom: "10px" }} src={addAdd} />
                      <p style={{ marginBottom: "0" }}>Nueva Dirección</p>
                    </Button>
                    <AddressModal
                      openmodelchild2={openmodel2}
                      setopenModelchild2={setopenModel2}
                      setboolData={setboolData}
                      setDisable={setDisable}
                      setShow={setShow}
                      setNewAddress={setNewAddress}
                    />
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
            <p className="span4p1">4. Mensaje (opcional)</p>
          </div>
          <div className="span4d1">
            <input
              className="span4i1"
              checked={checked1}
              onChange={handlecheckbox1}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="span4l1"
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
            className="span4p2"
            style={{
              display: `${checked1 ? "none" : "block"}`,
            }}
          >
            Vista previa
          </p>
          <TextareaAutosize
            className="span4t1"
            aria-label="empty textarea"
            placeholder="Escribe aquí..."
            style={{
              display: `${checked1 ? "none" : "block"}`,
            }}
          />
          <div className="span4d2">
            {" "}
            <div className="span4d3">
              <input
                className="span4i1"
                checked={checked2}
                onChange={handlecheckbox2}
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="span4l1"
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
              display: `${checked2 ? "none" : "block"}`,
            }}
          />
        </div>
        <div className="span-45">
          <p className="span45p1">5. Método de Pago</p>
          <div className="tripleDiv">
            <div className="subDiv">
              <input
                className="span45i1"
                checked={checkedm1}
                onChange={handlecheckboxm1}
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
            <div className="subDiv">
              <input
                className="span45i1"
                checked={checkedm2}
                onChange={handlecheckboxm2}
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
            <div className="subDiv">
              <input
                className="span45i1"
                checked={checkedm3}
                onChange={handlecheckboxm3}
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
                className="span45i1"
                checked={checkedterms}
                onChange={handlecheckboxterms}
                class="form-check-input"
                type="checkbox"
                value=""
              />
              <p className="span45p2">
                Acepto los
                <p className="span45p3">Términos y Condiciones</p>
                de Florería Suecia
              </p>
            </div>
            <div className="span45d1">
              <input
                className="span45i1"
                checked={checkedannual}
                onChange={handlecheckboxannual}
                class="form-check-input"
                type="checkbox"
                value=""
              />
              <p className="span45p2">
                Activar
                <p className="span45p3">recordatorio anual</p>
                de Florería Suecia
              </p>
            </div>
          </div>
        </div>
        <div className="span-5">
          <div className="span5d1">
            <img style={{ width: "70px", borderRadius: "10px" }} src={f2} />
            <div className="span5d2">
              <p style={{ marginBottom: "0" }}>Vino Rosa</p>
              <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <RemoveIcon
                  onClick={() => setQuantity1(quantity1 - 1)}
                  sx={{ color: pink[400] }}
                />
                <div className="span5d3"></div>
                <p className="span5p1">{quantity1}</p>
                <div className="span5d3"></div>
                <AddIcon
                  onClick={() => setQuantity1(quantity1 + 1)}
                  sx={{ color: pink[400] }}
                />
              </div>
            </div>
            <p>$90.00</p>
          </div>
          <div className="span5d1">
            <img style={{ width: "70px", borderRadius: "10px" }} src={f4} />
            <div className="span5d2">
              <p style={{ marginBottom: "0" }}>Vino Rosa</p>
              <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <RemoveIcon
                  onClick={() => setQuantity2(quantity2 - 1)}
                  sx={{ color: pink[400] }}
                />
                <div className="span5d3"></div>
                <p className="span5p1">{quantity2}</p>
                <div className="span5d3"></div>
                <AddIcon
                  onClick={() => setQuantity2(quantity2 + 1)}
                  sx={{ color: pink[400] }}
                />
              </div>
            </div>
            <p>$90.00</p>
          </div>
          <div className="span5d1">
            <img style={{ width: "70px", borderRadius: "10px" }} src={f1} />
            <div className="span5d2">
              <p style={{ marginBottom: "0" }}>Vino Rosa</p>
              <p style={{ color: "#9BABBF" }}>Ramo del día</p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <RemoveIcon
                  onClick={() => setQuantity3(quantity3 - 1)}
                  sx={{ color: pink[400] }}
                />
                <div className="span5d3"></div>
                <p className="span5p1">{quantity3}</p>
                <div className="span5d3"></div>
                <AddIcon
                  onClick={() => setQuantity3(quantity3 + 1)}
                  sx={{ color: pink[400] }}
                />
              </div>
            </div>
            <p>$90.00</p>
          </div>
          <Button className="bigbtn">Complementar pedido</Button>
          <div className="span5d4"></div>
          <div className="span5d5">
            <TextField
              className="span5t1"
              id="outlined-basic"
              label="Cupón de descuento"
              variant="outlined"
            />
            <Button className="span5b1">Aplicar</Button>
          </div>
          <div className="span5d4"></div>
          <div className="span5d5">
            <p style={{ color: "#9BABBF" }}>Subtotal</p>
            <p style={{ color: "#444444" }}>$27.990</p>
          </div>
          <div className="span5d5">
            <p style={{ color: "#9BABBF" }}>Envío</p>
            <p style={{ color: "#444444" }}>$4.990</p>
          </div>
          <div className="span5d4"></div>
          <div className="span5d5">
            <p style={{ color: "#9BABBF" }}>Total</p>
            <p className="span5p2">$32.980</p>
          </div>
        </div>
        <div className="span-6">
          <div className="span6d1"></div>

          <Button
            onClick={handleOpen3}
            variant="contained"
            className="buttonViolet"
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
