import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  color:"#fff",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "32.5%",
  transform: "translate(-50%,-50%)"
};

const image2 ="/images/bgImg1.jpg";



const hero2 = () => {
    return(
 <div >
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
    </Parallax>\
    -250  */}
    

    
  

    <Parallax bgImage={image2} strength={450} style={{ height: 400 }}>
      <Grid >
      <Typography variant="h3" mt={10} ml={10} sx={{ marginLeft: "10%", color: '#fff' }}>WE MODERNISE AGRICULTURE
      </Typography>  
      <br />      
      <Typography variant="h4" mt={5} ml={10} sx={{ marginLeft: "10%", color: '#fff' }}>WE MODERNISE INVESTMENTS
      </Typography>        
      </Grid>
    </Parallax>

  </div>
    );
  
};

export default hero2;
