import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Navbar from '../components/navbar2'
import Footer from '../components/footer'
import { Parallax, Background } from "react-parallax";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState();


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  const image ="/images/bgImg2.jpeg";

  return (
    <>
            
        <div className="nav-div">
          <Navbar />
        </div>


        <Parallax bgImage={image} strength={-200} speed={20}>
          <div style={{ height: '20%' }}>
          <Typography style={{ margin: 45, color: '#fff' }} variant="h4">Our Helpers throughout the process<br /></Typography>

          <Typography style={{ margin: 45, color: '#fff' }} variant="h6">
          Business expertise, responsiveness and efficiency are our core
              priorities. Our team is attentive to your needs and will guide you
              from the very start and set up of your investment. Benefit from
              the most qualified expertise on the market in terms of expense
              management solutions: our team is fully committed to your
              success.Our Highly qualified Agro-Engineers will be a valuable
              assest for your investmentas they will be guide the farmers
              throughout the process.
          </Typography>
          </div>
        </Parallax> 


      <div className="ae-container" style={{ background: "#fff" }}>
        <Container sx={{ py: 5, paddingBottom: 7 }} maxWidth="lg">
        


        <Grid container spacing={4} 
                        sx={{
                maxWidth: "100%",
                fontSize: 19,
                fontWeight: 10,
                paddingLeft: 0,
                paddingTop: 3,
                marginBottom: 10,
              }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  maxWidth: "550",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 10,
                  background: "#EFEFEF",
                }}
              >
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }}>A</Avatar>}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Mr. Akshat Shelke"
                  subheader="Sepcialization: Hydropponic crop production and process control"
                />
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/person1.jpeg"
                />
                <CardContent>
                  <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={0.5}
                    readOnly
                  />
                </CardContent>
                <CardActions disableSpacing>
                    <Typography align="center" aria-label="share">
                    Learn More
                    </Typography>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      Experience - ICAR-Indian Agricultural Research Institute
                      grad with over 12 years of field experience
                    </Typography>
                    <Typography paragraph>
                      Awarded By - University of Agritradition for her
                      commendabled Research in crop production.
                    </Typography>
                    <Typography paragraph>
                      General Manager of CROPCULTURE
                    </Typography>
                    <Typography paragraph>
                      Number of Junior Specialists – 8
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  maxWidth: "550",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 10,
                  background: "#EFEFEF",
                }}
              >
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }}>V</Avatar>}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Mr. Vivek Sharma"
                  subheader="Sepcialization: Soil Engineer and Fertilization and Pesticides Expert"
                />
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/swapnil.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </CardContent>
                <CardActions disableSpacing>
                    <Typography align="center" aria-label="share">
                    Learn More
                    </Typography>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      Experience - ICAR-Indian Agricultural Research Institute
                      grad with over 12 years of field experience
                    </Typography>
                    <Typography paragraph>
                      Had made some remarkable progress in the Soil Fertlization
                      Industry.
                    </Typography>
                    <Typography paragraph>
                      Chairperson of BHARAT KISSAN PRAGATI YOJNA.
                    </Typography>
                    <Typography paragraph>
                      Number of Junior Specialists – 5
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 10,
                  background: "#EFEFEF",
                }}
              >
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }}>A</Avatar>}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Dr. Aron D'mello "
                  subheader="Sepcialization: Post-Harvest Technology and Agricultural Economics"
                />
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/ronish.png"
                  alt="Paella dish"
                />
                <CardContent>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </CardContent>
                <CardActions disableSpacing>
                <Typography align="center" aria-label="share">
                    Learn More
                    </Typography>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      An industry expert from Jayashankar Telangana State
                      Agricultural University.
                    </Typography>
                    <Typography paragraph>
                      More than 15 years of teaching as well as on site
                      experience.
                    </Typography>
                    <Typography paragraph>
                      Experienced in 5 international projects and worked for
                      BHARAT VIKAS FOUNDATION.
                    </Typography>
                    <Typography paragraph>
                      Number of Junior Specialists – 4
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 10,
                  background: "#EFEFEF",
                }}
              >
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: red[500] }}>V</Avatar>}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Mr.Vikram Shethi"
                  subheader="Sepcialization: Agricultural Waste and Recycle Management
                  "
                />
                <CardMedia
                  component="img"
                  height="300"
                  image="/images/person2.jpeg"
                  alt="Paella dish"
                />
                <CardContent>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.0}
                    precision={0.5}
                    readOnly
                  />
                </CardContent>
                <CardActions disableSpacing>
                    <Typography align="center" aria-label="share">
                    Learn More
                    </Typography>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                      A young Jawaharlal Nehru Krishi Vishwa Vidyalaya graduate
                      who has won many awards for his expert solution in the
                      field of agriculture management.
                    </Typography>
                    <Typography paragraph>
                      Experience of 4 years with commendable projects in the
                      field of waste managment.
                    </Typography>
                    <Typography paragraph>
                      Part of 3 international projects.
                    </Typography>
                    <Typography paragraph>
                      Number of Junior Specialists – 3
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
        </Grid>


        




        </Container>

      </div>

      <Footer />
    </>
  );
}
