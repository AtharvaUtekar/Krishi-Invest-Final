import React from "react";
import { Parallax, Background } from "react-parallax";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'


const image ="/images/bgImg2.jpeg";


const hero0 = () => {
  return (
    <div>
    <Parallax bgImage={image} blur={{ min: -1, max: 3 }} strength={700}>
      <div style={{ height: 250 }}>
        <Typography variant="h4" mt={3}  textAlign="center" sx={{ padding: 3, color: '#fff' }} >We are कृषि Invest</Typography>
        <Typography variant="body1" mt={1}  textAlign="center" sx={{ padding: 3, color: '#fff' }}>
        Agri Investment is one of the leading investment platform in India where we invest your money in agriculture and aquaculture business and get 50-60 times ROI through fish farming and vertical farming. 
        All agreements and MOU will be done legally. We have 100% clean track record check our clients review, 
        talk to them before investing with us.</Typography>

      </div>
    </Parallax> 
    </div>
  )
}

export default hero0