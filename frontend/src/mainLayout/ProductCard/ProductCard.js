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
        <p
          style={{
            color: "#818181",
            fontSize: "12px",
            lineHeight: "0",
            paddingTop: "10px",
          }}
        >
          iCompra hoy, entrega cuando quieras!
        </p>
        <p style={{ color: "#D96581", paddingTop: "10px", fontSize: "12px" }}>
          Ramo del día
        </p>
        <p className="cardPrice">
          {"$ "}
          {variantPrice}
        </p>
        <div className="both">
          <Link
            className="link"
            style={{ width: "220px", height: "44px" }}
            to={`/user/product?${params}`}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#D96581",
                borderRadius: "7px",
                textTransform: "none",
                width: "220px",
                height: "44px",
                fontFamily: "Nunito",

                fontWeight: "500",
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              Agregar al carrito
            </Button>
          </Link>

          <img
            style={{
              background: "#FFFFFF",
              borderRadius: "10px",
            }}
            src={truckProductCard}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
