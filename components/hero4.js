
import React from "react";
import { Parallax, Background } from "react-parallax";
import { ParallaxProvider } from 'react-scroll-parallax';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const image ="/images/gradient.png";


const hero = () => {
  return (

      <Container sx={{ py: 5, paddingBottom: 7 }} maxWidth="lg">
      <Typography variant="h4" textAlign="center"><u>What Sets Us Apart?</u></Typography>

      <Grid container spacing={5} columns={14}
                sx={{
                maxWidth: "100%",
                fontSize: 19,
                fontWeight: 10,
                paddingTop: 5,
                marginBottom: 5,
              }}>
           <Grid item xs={12} sm={2} md={2} lg={2}>
           {/*sx={{ marginLeft: "15%" }} */}
           <Typography variant="subtitle1" textAlign="center">
                          <img style={{ width: 50, height: 50, margin: 10 }} src="/images/a2.png" />
                          <br/>
                          Above Market Returns 16-29% IRR
           </Typography>
           </Grid>            
           <Grid item xs={12} sm={2} md={2} lg={2} >
           <Typography variant="subtitle1" textAlign="center">
                          <img style={{ width: 50, height: 50, margin: 10 }} src="/images/a1.png" /><br/>
                          Healthy Portfolio Diversification
           </Typography>
           </Grid>           
           <Grid item xs={12} sm={2} md={2} lg={2}>
           <Typography variant="subtitle1"textAlign="center">
                          <img style={{ width: 50, height: 50, margin: 10 }} src="/images/a5.png" /><br/>
                          On site support and guidance to farmers 
           </Typography>
           </Grid>           
           <Grid item xs={12} sm={2} md={2} lg={2}>
           <Typography variant="subtitle1"textAlign="center">
                          <img style={{ width: 50, height: 50, margin: 10 }} src="/images/a6.png" /><br/>
                          Vocational training and development of farmer
                          
           </Typography>
           </Grid>
           <Grid item xs={12} sm={2} md={2} lg={2}>
           <Typography variant="subtitle1"textAlign="center">
                          <img style={{ width: 50, height: 50, margin: 10 }} src="/images/a4.png" /><br/>
                          Agro specialits
           </Typography>
           </Grid>
           <Grid item xs={12} sm={2} md={2} lg={2}>
           <Typography variant="subtitle1"textAlign="center">
                          <img style={{ width: 50, height: 50, margin: 10 }} src="/images/a7.png" /><br/>
                          State-of-the-art Farming equipments and machinery
                          
           </Typography>
           </Grid>
           <Grid item xs={12} sm={2} md={2} lg={2}>
           <Typography variant="subtitle1"textAlign="center">
                          <img style={{ width: 50, height: 50, margin: 10 }} src="/images/a8.png" /><br/>
                          Strong Legal Framework
                          
           </Typography>
           </Grid>

        </Grid>

      </Container>

  )
}

export default hero

