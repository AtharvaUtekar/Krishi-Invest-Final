import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


export default function StickyFooter() {
  return (
  <div>
  
    <Container spacing={2} component="footer">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CardContent>
            <CardActions>
            <Link href="/whatwedo">
            <Button size="medium">What we do ?</Button>
            </Link> 
            <Link href="/ourexperts">
            <Button size="medium">Our Experts</Button>
            </Link>    
            <Link href="/faq">
            <Button size="medium">FAQ</Button>
            </Link> 
            <Link href="/login">
            <Button size="medium">Login to Dashboard</Button>
            </Link> 
            </CardActions>
        </CardContent>


      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>

        <Grid item xs={12} sm={6} md={4} lg={4}>
        <Typography variant="h4" sx={{ fontWeight: '500' }}>कृषिinvest</Typography>
        <br />
        </Grid>



        <Grid  item xs={12} sm={6} md={4} lg={4}>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          
                <Typography variant="h6" component="div">
                    CONTACT US:
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
               
                    <Link href="mailto:atharva.v.utekar@gmail.com?subject=Query%20regarding%20Krishi%20Invest&body=%3C%20Your%20query%20here%20%3E">
                        <a>
                          <img style={{ width: 38, height: 38, margin: 10 }} src="/images/gmail.png" />
                        </a>
                    </Link>
                                   
                    <Link href="tel:+91 8652521225">
                        <a>
                        <img style={{ width: 38, height: 38, margin: 10 }} src="/images/call.png" />                        
                        </a>
                    </Link>
                                   
                    <Link href="https://wa.me/918652521225">
                        <a>
                          
                          <img style={{ width: 38, height: 38, margin: 10 }} src="/images/whatsapp.png" />
                        </a>
                    </Link>
                                   
                    <Link href="https://www.instagram.com/_aaatharva/">
                        <a>
                          <img style={{ width: 38, height: 38, margin: 10 }} src="/images/instagram.png" />
                        </a>
                    </Link>
                    <br />
                    Krishi Invest
                    St. Francis Institute Of Technology, Borivali <br />
                    Mumbai, Maharashtra, India
                </Typography>

        </Grid>



      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} align="center" >
        <Container sx={{marginBottom:"10"}}>
            <Typography variant="body1" color="text.secondary">
            {'Copyright © Krishi Invest 2022'}
            {'.'}
            </Typography>
        </Container>
      </Grid>
      <div style={{ height: 25 }} />

    </Container>
          
  </div>

  );
}