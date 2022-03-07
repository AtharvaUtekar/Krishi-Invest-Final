import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import Navbar from '../components/navbar2'
import Footer from '../components/footer'

export default function SubheaderDividers() {
  return (
<div>
<Navbar />
  <Grid container>
    <Grid sx={{ marginLeft: "15%", marginTop: "5%", marginRight: "15%", marginBottom: "1%"}}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={12} lg={6}>
            <img  
              style={{ width: "100%", height: "100%" }}        
              src="/images/bgImg4.jpg"
            />
            </Grid>
            <Grid xs={12} sm={12} lg={6}>
              
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            </Grid>


          </Grid>
        </Card>    
    </Grid>

    <Grid sx={{ marginLeft: "15%", marginTop: "2%", marginRight: "15%", marginBottom: "1%"}}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={12} lg={6}>
              
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Grid>

            <Grid xs={12} sm={12} lg={6}>
            <img  
              style={{ width: "100%", height: "100%" }}        
              src="/images/bgImg4.jpg"
            />
            </Grid>

          </Grid>
        </Card>    
    </Grid>

    <Grid sx={{ marginLeft: "15%", marginTop: "2%", marginRight: "15%", marginBottom: "1%"}}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={12} lg={6}>
            <img  
              style={{ width: "100%", height: "100%" }}        
              src="/images/bgImg4.jpg"
            />
            </Grid>
            <Grid xs={12} sm={12} lg={6}>
              
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            </Grid>


          </Grid>
        </Card>    
    </Grid>

    <Grid sx={{ marginLeft: "15%", marginTop: "2%", marginRight: "15%", marginBottom: "5%"}}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={12} lg={6}>
              
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Grid>

            <Grid xs={12} sm={12} lg={6}>
            <img  
              style={{ width: "100%", height: "100%" }}        
              src="/images/bgImg4.jpg"
            />
            </Grid>

          </Grid>
        </Card>    
    </Grid>

  </Grid>


<Footer />
</div>

  );
}


{/*
    <Grid container>
    <Grid xs={0} sm={3} md={2} lg={2}> </Grid>
    <Grid xs={12} sm={6} md={8} lg={8}>


    <Card sx={{ maxWidth: 900, margin: 3}}>
      <CardActionArea sx={{ display: 'flex' }}>

        <CardMedia
          component="img"
          height="400"
          image="/images/bgImg4.jpg"
          sx={{ display: 'flex', flexDirection: 'column', width: 350 }}
        />

        <CardContent sx={{ display: 'flex', flexDirection: 'column', width: 500 }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 900, margin: 3 }}>
      <CardActionArea sx={{ display: 'flex' }}>

        <CardContent sx={{ display: 'flex', flexDirection: 'column', width: 500 }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          height="400"
          image="/images/bgImg4.jpg"
          sx={{ display: 'flex', flexDirection: 'column', width: 350 }}
        />



      </CardActionArea>
    </Card>



    
    </Grid>
    <Grid xs={0} sm={3} md={2} lg={2}> </Grid>

    </Grid>
 */}