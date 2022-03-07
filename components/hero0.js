import React from "react";
import { Parallax, Background } from "react-parallax";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'


const image ="/images/bgImg6.jpg";


const hero0 = () => {
  return (
    <div>
    <Parallax bgImage={image} blur={{ min: -7, max: 15 }} strength={700}>
      <div>
        <Typography variant="h4" mt={3}  textAlign="center" sx={{ padding: 3, color: '#fff' }} ><b>We are कृषिInvest</b></Typography>
        <Typography variant="h6" textAlign="center" sx={{ padding: 2, color: '#000', marginBottom: '15px' }}>
        We provide above market average, high yield returns to investors through modern farming techniques and hydroponics, while empowering the farmer. 
        <br /> We provide authenticated statistical information and aim to disseminate cardinal information about the agricultural sector to the farming community. 
        <br/> The entire process is online, transparent and encrypted,<b> be a part now!</b>
        </Typography>

      </div>
    </Parallax> 
    </div>
  )
}

export default hero0