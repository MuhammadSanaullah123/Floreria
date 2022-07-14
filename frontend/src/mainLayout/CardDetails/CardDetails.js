import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./CardDetails.scss";





const CardDetails = () => {
  return (
    <div className="Step4">
      <div className="span-1">
        <div>
          <h3>Secured Checkout</h3>
          <div style={{display: "flex",justifyContent: "flex-start"}}>
          <p>Already Registered ?</p>
          <a>Click here to login</a>
          </div>
        </div>
      </div>
      <div className="span-2">
        <h6>Billing Address</h6>
          <div>
            <label htmlFor="html"> FirstName* </label>
            <TextField
              label=""
              variant="outlined"
              InputLabelProps={{ shrink: false }}
            />
          </div>
          <div>
            <label htmlFor="html"> LastName* </label>
            <TextField
              label=""
              variant="outlined"
              InputLabelProps={{ shrink: false }}
            />
          </div>
        <div>
          <label htmlFor="html"> Email* </label>
          <TextField
            label=""
            variant="outlined"
            InputLabelProps={{ shrink: false }}
          />
        </div>
        <div>
          <label htmlFor="html"> Phone* </label>
          <TextField
            label=""
            variant="outlined"
            InputLabelProps={{ shrink: false }}
          />
        </div>
        <div style={{gridColumn:'1/3'}}>
          <label htmlFor="html"> Address* </label>
          <TextField
            label=""
            multiline
            maxRows={2}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: false }}
          />
        </div>
        <div>
          <label htmlFor="html"> City* </label>
          <TextField
            label=""
            variant="outlined"
            InputLabelProps={{ shrink: false }}
          />
        </div>
        <div>
          <label htmlFor="html"> Country* </label>
          <TextField
            label=""
            variant="outlined"
            InputLabelProps={{ shrink: false }}
          />
        </div>
        <div>
          <label htmlFor="html"> State* </label>
          <TextField
            label=""
            variant="outlined"
            InputLabelProps={{ shrink: false }}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Demuestra tu agradec "
            />
          </FormGroup>
        </div>
        <div>
          <label htmlFor="html"> Zip Code* </label>
          <TextField
            label=""
            variant="outlined"
            InputLabelProps={{ shrink: false }}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Demuestra tu agradec "
            />
          </FormGroup>
        </div>
        <Button variant="contained" style={{gridColumn:'1/3'}} className="buttonViolet">
          Finalizar compra
        </Button>
      </div>
      <div className="span-3">
        <h6>Shipping Options</h6>
        <div className="radioSelection">
          <input
            type="radio"
            id="html"
            value="Custom shipping method
            0-5 days - $28.00"
          />
          <label htmlFor="html">Custom shipping method 0-5 days - $28.00</label>
        </div>
        <div className="radioSelection">
          <input type="radio" id="html" value="Retiro por sucursal" />
          <label htmlFor="html">Retiro por sucursal</label>
        </div>
      </div>
      <div className="span-4">
        <h6>Billing Options</h6>
        <div className="radioSelection">
          <input type="radio" id="html" value="C.O.D" />
          <label htmlFor="html" style={{ fontWeight: "bold" }}>
            C.O.D
          </label>
          <span>
            <label htmlFor="html">Cashier Check or Cash Only</label>
          </span>
        </div>
        <div className="radioSelection">
          <input type="radio" id="html" value="Credit card" />
          <label htmlFor="html" style={{ fontWeight: "bold" }}>
            Credit card
          </label>
          <span>
            <label htmlFor="html">Visa or Master</label>
          </span>
        </div>
        <div className="radioSelection">
          <input type="radio" id="html" value="Phone ordering" />
          <label htmlFor="html" style={{ fontWeight: "bold" }}>
            Phone ordering
          </label>
          <span>
            <label htmlFor="html">Call to 555555555</label>
          </span>
        </div>

        <div className="radioSelection">
          <input type="radio" id="html" value="Check" />
          <label htmlFor="html" style={{ fontWeight: "bold" }}>
            Check{" "}
          </label>
          <span>
            <label htmlFor="html">Check payment</label>
          </span>
        </div>
      </div>
      <div className="span-5">
        <h6>Revisa lo que llevas</h6>
        <p style={{ color: "#818181", fontSize: "0.8rem" }}>
          Productos envaidos pos Drafiti
        </p>
        <div className="reviewProductCard">
          <img
            src={require("./../../assets/Rectangle69.png").default}
            alt="productImage"
          />
          <div>
            <h6>DEMIN</h6>
            <p className="productdDetails">
              Method de page Todos ios methdos habiito.
            </p>
            <p>TALE : 1</p>
            <p>cantidad : 1 Combiar</p>
          </div>
          <strong>$9.900</strong>
        </div>
        <div className="productPriceTotal">
            <div>
              <p>Sub Total</p>
              <p>$9.900</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>$9.9</p>
            </div>
            <div>
              <strong>Other Total</strong>
              <p>$9.9</p>
            </div>
          </div>
          <div style={{marginLeft: "auto",gridColumn: "1/5"}}>
            <label htmlFor="html"> Usar cupón </label>
            <TextField
              label=""
              variant="outlined"
              style={{margin:"0 1rem"}}
            />
            <Button variant="contained" className="buttonViolet">
              Apply
            </Button>
          </div>
              <p style={{gridColumn:"1/3"}}>
              Si quieres puedes escribir un mensaje
aquí y lo enviaremos en un lindo sobre
              </p>
              <TextField
                label=""
                variant="outlined"
                multiline
                maxRows={3}
                style={{gridColumn:"3/5"}}
              />
          <FormGroup style={{gridColumn: "3/5"}}>
            <FormControlLabel
              control={<Checkbox />}
              label="Demuestra tu agradec "
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Demuestra tu agradec "
            />
          </FormGroup>
          <Button fullWidth variant="contained" className="buttonViolet">
          Finalizar compra
          </Button>
      </div>
    </div>
  );
};

export default CardDetails;
