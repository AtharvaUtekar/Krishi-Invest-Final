import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
      label: 'Farm Selection & Entity Creation',
      description: "We analyze the land from all facets and dispense the finest output with an explanation on the dashboard. The legal title of each farm is placed into a unique entity (usually an LLC) which stands for Limited Liability Company .A unique entity establishes a real estate contract with the land owner and is given a period of time to complete due diligence, legal work, and raise funds on KrishiInvest. The typical time period for this is 10-15 days.",
    },
    {
      label: 'Investment',
      description: "You purchase shares in the entity that owns a farm. This procedure could be done online with utmost ease. Each entity is divided into shares equivalent to 1/10 of an acre. So, if you plan to  buy 20 shares, your ownership represents the equivalent of 2 acres of land and the associated dividends. Our online process is reliable,encrypted and can be completed in just a few minutes, and you can invest 100% electronically. Or, if you prefer to invest conventionally feel free to contact us for help through the investment process.",
    },
    {
      label: 'Farm Management',
      description:
        `We work closely with our farmers and external managers to help with best practices, technological improvements, sustainability, and immediate access to capital.To the best of our ability, we strive to improve our farmers' lives and ease of doing business in every way. KrishiInvest farmers pay cash rent, which is a common relationship between farmers and landowners`
    },
    {
        label: 'Distribution',
        description: `
        Krishi Invest disburses excess annual income to investors. We would generally expect an unlevered yield of 15% - 21% for lower-risk properties. Investors in each farm receive dividends each December in addition to expected annual value appreciation. Any necessary tax documentation will be provided by February of the following year, well in advance of tax season.`,
    },
  ];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: '15%', marginTop: '3%', marginBottom: '5%'}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              <Typography variant="h5">{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body1">{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Next step'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h4">Your farm investment is ready to draw maximum profits!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset to view all steps again
          </Button>
        </Paper>
      )}
    </Box>
  );
}
