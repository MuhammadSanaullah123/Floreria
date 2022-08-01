import React, { useState, useRef } from "react";
import "./MyAccount.scss";
import { Button, Grid, listClasses, ListItem } from "@mui/material";
import { List } from "@mui/material";
import { Drawer } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import AddressModal from "../../components/cart/AddressModal";
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

  const [style_index, setIndex] = useState("");
  const [style_index2, setIndex2] = useState("");
  const [show, setShow] = useState(false);
  const [openmodel2, setopenModel2] = useState(false);

  const [selected2, setSelected2] = useState(false);
  const [textarea3, settextArea3] = useState("");

  const [booldata, setboolData] = useState();
  const [newAddress, setNewAddress] = useState([]);

  const [disable, setDisable] = useState(true);
  const [address2, setaddress] = useState([]);

  const handleOpen2 = () => setopenModel2(true);

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
        <List classname="list">
          <div className="accountPic">
            <div className="myaccountbox1d1">M</div>
            <p className="myaccountbox1p1">Milovan</p>
          </div>

          <Link to="home" className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navhome1}
            />
            Inicio
          </Link>

          <Link to="reminders" className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbell1}
            />{" "}
            Recordatorios
          </Link>

          <Link className="myaccountbox1l1">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navmap2}
            />
            Direcciones
          </Link>

          <Link to="myorders" className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbag1}
            />
            Pedidos
          </Link>

          <Link className="myaccountbox1l2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navgift1}
            />
            VIP
          </Link>

          <Link to="referrals" className="myaccountbox1l2">
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
            <div className="superdivd1">M</div>
            <p className="superdivp1">Milovan</p>
          </div>
          <Link to="home" className="superdivl2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navhome1}
            />
            Inicio
          </Link>
          <Link to="reminders" className="superdivl2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbell1}
            />{" "}
            Recordatorios
          </Link>
          <Link className="superdivl1">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navmap2}
            />
            Direcciones
          </Link>
          <Link to="myorders" className="superdivl2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navbag1}
            />
            Pedidos
          </Link>
          <Link className="superdivl2">
            <img
              style={{ marginRight: "14px", marginLeft: "10px" }}
              src={navgift1}
            />
            VIP
          </Link>
          <Link to="referrals" className="superdivl2">
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
          <div style={{ marginLeft: "20px", display: "flex", width: "100%" }}>
            <div
              style={{
                marginRight: "20px",
                display: `${show ? "flex" : "none"}`,
              }}
            >
              {booldata
                ? newAddress.map((addresses, index) => {
                    return (
                      <div
                        className={`${index} deliveryaddressdivd1`}
                        key={index}
                        disabled={disable}
                        variant="contained"
                        style={{
                          //display: `${style_index2 === index ? "none" : ""}`,

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
                            className="deliveryaddressdivp1"
                            style={{
                              background: `${
                                style_index === index ? "#ffffff" : "#D96581"
                              }`,
                              color: `${
                                style_index === index ? "#D96581" : "#ffffff"
                              }`,
                            }}
                          >
                            Casa
                          </p>
                          <div style={{ display: "flex" }}>
                            <div
                              className="deliveryaddressdivd2"
                              onClick={() => handleRemove(index)}
                            >
                              <img src={addCross} />
                            </div>
                            <div className="deliveryaddressdivd3">
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
            >
              <img style={{ marginBottom: "10px" }} src={addAdd} />
              Nueva Dirección
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
      </div>
    </div>
  );
};
export default DeliveryAddress;
