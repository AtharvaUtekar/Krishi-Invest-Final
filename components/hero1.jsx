import React from "react";
import { Parallax, Background } from "react-parallax";
import { links } from './data';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Navbar from './navbar'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  color:"#fff",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "35%",
  transform: "translate(-50%,-50%)"
};

const image2 ="/images/bgImg2.jpeg";


const herosection = () => {
    return(
    <div>

    {/* 
    Normal parallax
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax> */}

    {/* 
    Dynamic blur parallax
    <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Dynamic Blur</div>
      </div>
    </Parallax> 
    */}




    <Parallax bgImage={image2} strength={-175} speed={20}>

      <Navbar />

   
      <div style={{ height: 500 }}>

        <div style={insideStyles}>
        <h2>Diversify your portfolio while supporting a farmer</h2>
        <h3>Investing online, within minutes.</h3>
        </div>
      </div>
    </Parallax>
    {/*<img src="/images/i1.png" className="img1" />*/}


    </div>
  );
  
};

export default herosection;
