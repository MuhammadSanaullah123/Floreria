import React from 'react'
import "./ProductCardPopup.scss";
import Button from '@mui/material/Button'
const ProductCardPopup = ({value}) => {
        const {src,title,price,buttontext} = value;
  return (
    <div className="productCard">
        <div className="cardImage">
            <img src={(src).default}/>
        </div>
        <div className='cardTitle'>
            {title}
        </div>
        <div className='cardPrice'>
        {price}
        </div>
    </div>
  )
}

export default ProductCardPopup;