import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Category.scss";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import searchbar from "./../../assets/searchbar.svg";
import arrowdown from "./../../assets/arrowdown.svg";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { pink } from "@mui/material/colors";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { ReactComponent as Filter } from "./../../assets/filter.svg";
import minus from "./../../assets/minus.svg";
import plus from "./../../assets/plus.svg";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ProductCard from "./../../mainLayout/ProductCard/ProductCard";
import { collectionImages } from "./../../assets/collectionImages/index";
import Pagination from "@mui/material/Pagination";
import Drawer from "@mui/material/Drawer";
import useAsync from "../../hooks/useAsync";
import ProductServices from "../../services/ProductServices";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F4F4F4",
  "&:hover": {
    backgroundColor: "#F4F4F4",
  },
  marginLeft: 0,
  // width: '100%',
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#D96581",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("xs")]: {
      width: "6ch",
    },
  },
}));
function valuetext(value) {
  return `$${value}`;
}
const Category = () => {
  const { data, loading } = useAsync(ProductServices.getAllProducts);

  const tempData = data;

  // handling the collapsing menu state
  const [openProduct, setopenProduct] = React.useState(true);
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const handleProduct = () => {
    setopenProduct(!openProduct);
  };

  // Collapsed menu
  const [openCollection, setopenCollection] = React.useState(true);

  const handleCollection = () => {
    setopenProduct(!openCollection);
  };
  // Handling select box event state
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // handling Check State
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [priceFilter, setPriceFilter] = useState("1");
  const handlePriceFilter = (event) => {
    setPriceFilter(event.target.value);
  };

  const search = useLocation().search;
  console.log(search);
  const name = new URLSearchParams(search).get("products");
  console.log(name);
  var twoCategory = "";
  if (name) twoCategory = name.split("|");
  else twoCategory = name;
  // (name.includes('|') ?)
  console.log(name);

  const marks = [
    {
      value: 10,
      label: "$10",
    },
    {
      value: 5000,
      label: "$5,000",
    },
  ];

  const [value, setValue] = React.useState([2500, 4000]);
  const handleSlider = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="categoryContainer">
      {/* <div className="topNavigation">
        <Stack spacing={2}>
          <Breadcrumbs separator="|" aria-label="breadcrumb">
            <a>Enviar a</a>
            <a style={{ fontWeight: "bold" }}>Benito Juarez</a>
          </Breadcrumbs>
        </Stack>
      </div> */}
      <div className="PageLayout">
        <div className="span-1">
          <h1
            style={{
              fontFamily: "Nunito",
              fontWeight: "600",
              fontSize: "40px",
            }}
          >
            CUMPLEAÑOS
          </h1>
          <div className="vertialL"></div>
        </div>

        <div className="span-2">
          <h6
            style={{
              fontFamily: "Nunito",
              fontWeight: "400",
              fontSize: "18px",
              color: "#000000",
            }}
          >
            Encuentra arreglos florales y regalos para celebrar cualquier
            ocasion especial con envios a domicilio.
          </h6>
          <p
            style={{
              fontFamily: "Nunito",
              color: "#818181",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            Hermosos affreglos y regalos perfectos para celebrar ese dia
            especial. Nuestros arreglos esten culdadosamente elaborados por
            expertos floistas. eligiendo siempre Ias flores mas frescas y de la
            mas alta calidad. La mejor experiencia de compra y envio de regalos
            en Benito Juarez.
          </p>
        </div>

        <div className="span-4" style={{ display: "flex" }}>
          <p style={{ color: "#818181" }}>Ordenar por</p>
          <FormControl
            style={{
              width: "220px",
              height: "44px",
              border: "1px solid #9BABBF",
              borderRadius: "10px",
            }}
          >
            {/* <InputLabel id="demo-simple-select-label">Price</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={priceFilter}
              label="Age"
              onChange={handlePriceFilter}
              style={{
                height: "44px",
                fontSize: "20px",
              }}
            >
              <MenuItem value={1}>$ Mayor a menor</MenuItem>
              <MenuItem value={2}>$ Menor a mayor</MenuItem>
            </Select>
          </FormControl>
          {/* <KeyboardArrowDownIcon sx={{ color: pink[500] }} /> */}
          <button
            className="recommendbtn"
            variant="contained"
            style={{
              width: "250px",
              color: "#D96581",

              borderRadius: "10px",
            }}
          >
            $ Menor a mayor
          </button>
        </div>
        <div className="span-5">
          <div
            style={{
              display: "block",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h5 style={{ fontSize: "20px" }}>Filters</h5>

            <div className="span-3">
              <Search
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "#F8F8F8",
                  borderRadius: "10px",
                }}
              >
                <StyledInputBase
                  color="primary"
                  placeholder="Buscar..."
                  inputProps={{ "aria-label": "search" }}
                />
                <Button>
                  <img src={searchbar} />
                </Button>
              </Search>
            </div>
            <div onClick={toggleDrawer(true)} className="downarrowDiv">
              <KeyboardArrowDownIcon sx={{ color: pink[300], fontSize: 40 }} />
            </div>
            <Drawer
              className="filterDrawer"
              variant="temporary"
              anchor="down"
              open={state}
              onClose={toggleDrawer(false)}
            >
              <div
                style={{
                  width: "80%",
                  alignSelf: "center",
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div onClick={toggleDrawer(false)} className="uparrowDiv">
                  <KeyboardArrowUpIcon
                    sx={{ color: pink[300], fontSize: 40 }}
                  />
                </div>
                <h6 style={{ paddingBottom: "20px" }}>Rango de precio</h6>
                <Box sx={{ width: 300 }}>
                  <Slider
                    style={{ color: "#D96581", background: "none" }}
                    getAriaLabel={() => "Money range"}
                    value={value}
                    onChange={handleSlider}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                    marks={marks}
                    min={10}
                    max={5000}
                  />
                </Box>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                ></div>
                <div className="hline"></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignCenter: "center",
                    marginTop: "20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h6>Rango de precio</h6>
                  <RemoveIcon
                    sx={{ color: pink[400], fontSize: 40 }}
                    onClick={handleProduct}
                  >
                    {" "}
                    {openProduct ? <ExpandLess /> : <ExpandMore />}
                  </RemoveIcon>
                </div>
                <Collapse in={openProduct} timeout="auto" unmountOnExit>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {[
                      "Flores",
                      "Plantas",
                      "Postreys",
                      "Globos",
                      "Pasteles",
                      "Regalos",
                      "Condolenicas",
                      "Votanas",
                      "Licories",
                    ].map((item, index) => {
                      const labelId = `checkbox-list-label-${index}`;

                      return (
                        <ListItem key={index} disablePadding>
                          <ListItemButton
                            role={undefined}
                            onClick={handleToggle(item)}
                            dense
                          >
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={
                                  false
                                  //checked.indexOf(item) !== -1 ||
                                  //(twoCategory[0] == item ? true : false) ||
                                  //(twoCategory[1] == item ? true : false)
                                }
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ "aria-labelledby": labelId }}
                              />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${item}`} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
                <div className="hline"></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <h6>Coleooion</h6>
                  <AddSharpIcon
                    sx={{ color: pink[400], fontSize: 40 }}
                    aria-label=""
                    onClick={handleCollection}
                  >
                    {openCollection ? <ExpandLess /> : <ExpandMore />}
                  </AddSharpIcon>
                </div>
                <Collapse
                  in={openCollection}
                  timeout="auto"
                  unmountOnExit
                ></Collapse>
                <Button
                  style={{
                    color: "#FFF",
                    backgroundColor: "#D96581",
                    borderRadius: "10px",
                    width: "290px",
                    height: "44px",
                    marginTop: "20px",
                  }}
                >
                  Limpiar Filtros (0)
                </Button>
              </div>
            </Drawer>
          </div>
          <div className="DesktopFilter">
            <h6 style={{ paddingBottom: "20px" }}>Rango de precio</h6>
            <Box sx={{ width: 300 }}>
              <Slider
                style={{ color: "#D96581", background: "none" }}
                getAriaLabel={() => "Money range"}
                value={value}
                onChange={handleSlider}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                marks={marks}
                min={10}
                max={5000}
              />
            </Box>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            ></div>
            <div className="hline"></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignCenter: "center",
                marginTop: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h6>Rango de precio</h6>
              <RemoveIcon
                sx={{ color: pink[400], fontSize: 40 }}
                onClick={handleProduct}
              >
                {" "}
                {openProduct ? <ExpandLess /> : <ExpandMore />}
              </RemoveIcon>
            </div>
            <Collapse in={openProduct} timeout="auto" unmountOnExit>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {[
                  "Flores",
                  "Plantas",
                  "Postreys",
                  "Globos",
                  "Pasteles",
                  "Regalos",
                  "Condolenicas",
                  "Votanas",
                  "Licories",
                ].map((item, index) => {
                  const labelId = `checkbox-list-label-${index}`;

                  return (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(item)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={
                              false
                              //checked.indexOf(item) !== -1 ||
                              //(twoCategory[0] == item ? true : false) ||
                              //(twoCategory[1] == item ? true : false)
                            }
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${item}`} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
            <div className="hline"></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <h6>Coleooion</h6>
              <AddSharpIcon
                sx={{ color: pink[400], fontSize: 40 }}
                aria-label=""
                onClick={handleCollection}
              >
                {openCollection ? <ExpandLess /> : <ExpandMore />}
              </AddSharpIcon>
            </div>
            <Collapse
              in={openCollection}
              timeout="auto"
              unmountOnExit
            ></Collapse>
            <Button
              style={{
                color: "#FFF",
                backgroundColor: "#D96581",
                borderRadius: "10px",
                width: "290px",
                height: "44px",
                marginTop: "20px",
              }}
            >
              Limpiar Filtros (0)
            </Button>
          </div>
        </div>
        <div className="span-6">
          <div className="collectionArr">
            {tempData.map((item, index) => (
              <ProductCard key={index} value={item} />
            ))}
            {/* {collectionImages.map((item, index) => (
              <ProductCard key={index} value={item} />
            ))}
            {collectionImages.map((item, index) => (
              <ProductCard key={index} value={item} />
            ))} */}
          </div>
        </div>
        <div className="span-7">
          <Stack className="stackPagination" spacing={2}>
            <Pagination count={10} />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Category;
