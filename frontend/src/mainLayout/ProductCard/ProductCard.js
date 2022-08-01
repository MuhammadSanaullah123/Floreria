import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import delivery from "./../../assets/delivery.svg";
import truckProductCard from "./../../assets/truckProductCard.svg";

import Button from "@mui/material/Button";

const ProductCard = ({ value }) => {
  const { images, productName, variantPrice, _id } = value;
  var params = window.location.href.concat(`&productid=${_id}`);
  params = params.split("?")[1];
  console.log(params);

  return (
    <div className="productCard">
      <div className="cardImage">
        <img src={images} />
      </div>
      <div style={{ width: "90%", alignSelf: "center" }}>
        <p className="cardTitle">{productName}</p>
        <p className="productcardp1">iCompra hoy, entrega cuando quieras!</p>
        <p className="productcardp2">Ramo del día</p>
        <p className="cardPrice">
          {"$ "}
          {variantPrice}
        </p>
        <div className="both">
          <Link className="link" to={`/user/product?${params}`}>
            <Button className="productcardb1" variant="contained">
              Agregar al carrito
            </Button>
          </Link>
          <div className="productcardd1">
            <img className="productcardpic" src={truckProductCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
