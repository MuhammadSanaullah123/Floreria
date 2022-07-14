import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";
import delivery from "./../../assets/delivery.svg";
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
      <div style={{ width: "95%", alignSelf: "center" }}>
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
            style={{ width: "80%", height: "40px" }}
            to={`/user/product?${params}`}
          >
            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#D96581",
                borderRadius: "7px",
                textTransform: "none",
                width: "100%",
                height: "100%",
              }}
            >
              Agregar al carrito
            </Button>
          </Link>

          <img src={delivery} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
