import React, { Children } from 'react';
//main layout
import Header from './Header/Header';
import Footer from './Footer/Footer';
import "./main_layout.scss";
const mainLayout = (props) => {
    return(
        <div className='MainContainer'>
            {props.children} 
        </div>
        
    );
    
}

export default mainLayout;