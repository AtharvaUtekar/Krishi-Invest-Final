import * as React from "react";
import Typography from "@mui/material/Typography";
import Navbar from '../components/navbar2'
import Footer from '../components/footer'
import { Parallax } from "react-parallax";
import Stepper from '../components/stepper';



export default function FullWidthTabs() {

    const image ="/images/farm4.jpg";
    const imagee ="";
    
  return (
    <>
        <div className="nav-div">
        <Navbar />
        </div>


        <Parallax bgImage={image} strength={-200} speed={20}>
          <div style={{ height: '20%' }}>
          <Typography style={{ margin: 45, color: '#fff' }} variant="h4">Our Investment Process & Philosophy<br /></Typography>

          <Typography style={{ margin: 45, color: '#fff' }} variant="h6">
          Data-driven, technology-enabled decision making.
          With an unwavering commitment to our disciplined and conservative investment philosophy, we offer nothing but the highest quality farmland investment opportunities          
          </Typography>
          </div>
        </Parallax> 

        <Typography style={{ margin: 20, marginLeft: '15%', marginTop: 35, color: '#000' }} variant="h4">How we work?<br /></Typography>

        <Stepper />


     

{/*
        <Box sx={{ flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
                }}
            >
                <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ width: '100%', p: 2 }}>
                {steps[activeStep].description}
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                    ) : (
                    <KeyboardArrowRight />
                    )}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                    ) : (
                    <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
                }
            />
            </Box> */}


                  
        <Parallax bgImage={imagee} strength={-200} speed={20}>
          <div style={{ height: '20%' }}>
          <Typography style={{ margin: 45, color: '#000' }} variant="h4">What do we do?<br /></Typography>

          <Typography style={{ margin: 45, color: '#000' }} variant="h6">
          The kernel agenda of our business plan is to bridge the gap between farmers and investors and thus energize and strengthen the economy of India. The massive challenges faced by farmers are unemployment and financial hardships be it due to environmental reasons or economical issues. We plan to dispense farmers with a chance to dilate their business by incorporating investment from investors as well as get supervised assistance from our certified and trained agro specialists. For Investors our goal is to provide a reliable and high yield return asset as compared to other ubiquitous investments.
          We offer an Equity based Model in which the investor invests in equity offered by the local farmer through our platform (Website). Which is managed and supervised by our highly skilled team of Agro Engineers, who provide critical insights to augment productivity. Our Business model can be further scaled by populating  additional revenue generating sources of income such as poultry, pisciculture, sericulture on the farm as well.Our Project promotes as well as espouses entrepreneurship  among the young generation of India and at the same time dispenses quality education to both farmers as well as the investors about agriculture which is the backbone of our country.     
          </Typography>
          </div>
        </Parallax> 
        
        <div style={{ height: 50 }} />

        <Footer />
    </>

  );
}
