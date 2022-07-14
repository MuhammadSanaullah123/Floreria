import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "./StepOne.scss"
import { productImagesButton } from './../../assets/productImagesBottom/index';
import ProductCardPopup from './../ProductCardPopup/ProductCardPopup';
import Divider from "@mui/material/Divider";
import Carousel from "react-elastic-carousel";
import Button from '@mui/material/Button'
import {ReactComponent as BirthdayGift} from "./../../assets/BirthdayGift.svg"
import IconButton from '@mui/material/IconButton'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };
  
const StepOne = (props) => {
    const [open,setOpen] = props.value;
    const handleClose = () => setOpen(false);
    return (
    <div>
        {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="ContainerModal">
          <h4 style={{padding:"1rem 1rem"}}>Complete predico (Optional)</h4>
          <Divider style={{magin:"1rem 0",gridColumn:"1/5"}} />
          <div className="midContainer" style={{padding:"1rem 1rem"}}>

          <Carousel itemsToShow={5} className="carousel">
        {productImagesButton.map((item, index) => (
          <ProductCardPopup key={index} value={item} />
          ))}
          </Carousel>
          <div className="CardBox">
            <IconButton aria-label="Add something">
            <BirthdayGift/>
            </IconButton>
            <p>Ver globos y mas</p>
          </div>
          </div>
          <Divider style={{magin:"1rem 0",gridColumn:"1/5"}} />
          <div className="lowerBox" style={{padding:"1rem 1rem"}}>
            <h6>CORONA ACOMPANAMIENTO</h6>
            <Button variant="contained" className="buttonViolet">
            $ Menor a mayor
            </Button>
          </div>
        </Box>
      </Modal> */}
    </div>
  )
}

export default StepOne;