import React, { useState, useEffect } from "react";

import "./AddressModel.scss";

//components
import MapContainer from "./MapContainer";

//MUI
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

//other_mod

import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

//asset
import cross from "./../../assets/cross.svg";
import questionmark from "./../../assets/questionmark.png";

const AddressModal = ({
  openmodelchild2,
  setopenModelchild2,
  setboolData,
  setDisable,
  setShow,
  setNewAddress,
}) => {
  const [openmodel2, setopenModel2] = useState(openmodelchild2);
  const [googleaddress, setgoogleAddress] = useState(null);
  const [personName, setPersonName] = useState([]);
  const [absentName, setAbsentName] = useState([]);
  const [openmodelmap, setopenmodelmap] = useState(false);

  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  const [addressname, setaddressname] = useState("");
  const [newAddresschild, setNewAddresschild] = useState([]);
  // const [booldata, setboolData] = useState();
  //const [disable, setDisable] = useState(true);
  // const [show, setShow] = useState(false);

  const handleOpenMap = () => setopenmodelmap(true);
  const handleCloseMap = () => setopenmodelmap(false);
  function handleClose2() {
    return setopenModel2(false), setopenModelchild2(false);
  }
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
    inputvalues.address = googleaddress.label;
    //setopenModel2(false);
    handleOpenMap();

    setaddressname(googleaddress.label);
    geocodeByAddress(googleaddress.label)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => (setlatitude(lat), setlongitude(lng)));
  };
  const handleStore2 = () => {
    var temp = newAddresschild;
    inputvalues.address = googleaddress.label;
    temp.push(inputvalues);
    setNewAddress(temp);
    setboolData(true);
    setDisable(false);
    setShow(true);
    handleCloseMap(true);
    handleClose2();
    console.log("newAddresschild:--------->");
    console.log(newAddresschild);
  };
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
  return (
    <div>
      <Modal
        style={{
          overflowX: "auto",
        }}
        open={openmodelchild2}
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
              className="d1"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                className="t1"
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
                className="t2"
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
                className="a1"
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
            </div>
            <div className="formsdiv">
              <TextField
                className="t3"
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
                className="t4"
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
                  ¿Que hacemos si no está la persona que debe recibir el pedido?
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
              <MapContainer lat={latitude} lng={longitude} name={addressname} />
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
    </div>
  );
};

export default AddressModal;
