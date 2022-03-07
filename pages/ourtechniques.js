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
        <Typography gutterBottom variant="h5" component="div" sx={{ marginLeft: "15%", marginTop: "5%"}}>
          <em><u>Our Farming Techniques:</u></em>
        </Typography>
    <Grid sx={{ marginLeft: "15%", marginTop: "5%", marginRight: "15%", marginBottom: "1%", boxShadow: 15}}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={12} lg={6}>
            <img  
              style={{ width: "100%", height: "100%" }}        
              src="/images/wwd3.jpg"
            />
            </Grid>
            <Grid xs={12} sm={12} lg={6}>
              
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <u>HYDROPHONIC FARMING</u>
              </Typography>
              <Typography variant="body1" color="text.secondary">

              An innovative way of multiplying our yields for better economic value. 
              It is poly-house-based farming. 
              Higher productivity and yield of vegetables and fruits, which are residue free. 
              An efficient and sustainable technology.
              

              </Typography>
              <br />
              <Typography variant="body1">
              <b>
                Advantages:
                <ul>
                  <li>It is in your control, rather than being dependent on weather conditions</li>
                  <li>Saves time, manpower, land, water and electricity.</li>
                  <li>One-time investment with long term returns.</li>
                </ul>
              </b>
              </Typography>
            </CardContent>
            </Grid>


          </Grid>
        </Card>    
    </Grid>

    <Grid sx={{ marginLeft: "15%", marginTop: "2%", marginRight: "15%", marginBottom: "1%", boxShadow: 15}}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={12} lg={6}>
              
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <u>AEROPONIC FARMING</u>
              </Typography>
              <Typography variant="body1" color="text.secondary">

              Aeroponics is considered one of the best methods to grow plants in a soil-free environment and the need for this method has been growing due to a clear need for a more convenient way to grow plants. Plant roots are hung in the air in a grow chamber in a closed-loop system. 
              The roots are sprayed with nutrient-rich water or fine, high-pressure mist containing nutrient-rich solutions at certain intervals.
              

              </Typography>
              <br />

              <Typography variant="body1">
              <b>
              Advantages:
              <ul>
                <li>Maximum nutrient absorption for plant roots due to no growing medium</li>
                <li>With this type of modular system, you can maximize the use of limited space.</li>
                <li>Considerably fewer nutrients and water used on average compared to other systems because of higher nutrient absorption rate.</li>
              </ul>
              </b>
              </Typography>

              

              </CardContent>
            </Grid>

            <Grid xs={12} sm={12} lg={6}>
            <img  
              style={{ width: "100%", height: "100%" }}        
              src="/images/wwd4.jpg"
            />
            </Grid>

          </Grid>
        </Card>    
    </Grid>

    <Grid sx={{ marginLeft: "15%", marginTop: "2%", marginRight: "15%", marginBottom: "1%", boxShadow: 15}}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={12} lg={6}>
            <img  
              style={{ width: "100%", height: "100%" }}        
              src="/images/wwd2.jpg"
            />
            </Grid>
            <Grid xs={12} sm={12} lg={6}>
              
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <u>MULTILAYER FARMING</u>
              </Typography>
              <Typography variant="body1" color="text.secondary">

              Multilayer farming is a modern integrated farming system in which 4 to 5 different crops are 
              cultivated in the same crop-field in a specific time. 
              In this farming technique, farmers come up with multilayer seed sowing in which different vegetable and fruit crops are being sown in deep, middle, top, topmost layers of soil, 
              according to their respective root zone, simultaneously in a single crop field.
              

              </Typography>
              <br />
              <Typography variant="body1">
              <b>
              Advantages:
              <ul>
                <li>In Multilayer farming, the cost of cultivation is 4 times lower, whereas the advantage is eight times higher than another farming system.</li>
                <li>In the Multilayer farming process, the total amount of fertilizer and water for cultivating four crops is as much as the cultivation of one crop.</li>
                <li>Prevents water evaporation from the soil as an effect, 70% of water is saved.</li>


              </ul>
              </b>
              </Typography>
            </CardContent>
            </Grid>


          </Grid>
        </Card>    
    </Grid>

    <Grid sx={{ marginLeft: "15%", marginTop: "2%", marginRight: "15%", marginBottom: "5%", boxShadow: 15}}>
        <Card>
          <Grid container>
            <Grid xs={12} sm={12} lg={6}>
              
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <u>AQUACULTURE FARMING</u>
              </Typography>
              <Typography variant="body1" color="text.secondary">

              To assist in the development of a highly competitive, sustainable aquaculture industry that will meet growing consumer demand for aquatic foods and products that are high quality, safe, competitively priced and are produced in an environmentally 
              responsible manner with maximum opportunity for profitability in all sectors of AQUACULTURE INDUSTRY.
              

              </Typography>
              <br />
              <Typography variant="body1">
              <b>
              Advantages:
                <ul>
                  <li>Alternative food source</li>
                  <li>Reduces Sea Food trade deficit</li>
                  <li>Reduced Environmental Disturbance</li>
                  
                </ul>
              </b>
              </Typography>
              </CardContent>
            </Grid>

            <Grid xs={12} sm={12} lg={6}>
            <img  
              style={{ width: "100%", height: "100%" }}        
              src="/images/wwd1.jpg"
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