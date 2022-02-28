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
      description: "Each parcel we review is of the highest quality, so we select only a small fraction of them. The legal title of each farm is placed into a unique entity (usually an LLC). A unique entity establishes a real estate contract with the land owner and is given a period of time to complete due diligence, legal work, and raise funds on KissanUdyog. The typical time period for this is 30-90 days.",
    },
    {
      label: 'Investment',
      description: "You purchase shares in the entity that owns a farm. This can be done in just minutes online. Each entity is divided into shares equivalent to 1/10 of an acre. So, if you buy 20 shares, your ownership represents the equivalent of 2 acres of land and the associated dividends. Our online process can be completed in just minutes, and you can invest 100% electronically. Or, if you prefer, feel free to contact us for help through the investment process.",
    },
    {
      label: 'Farm Management',
      description: `
      •	We work closely with our farmers and external managers to help with best practices, technological improvements, sustainability, and immediate access to capital.
      •	We strive to improve our farmers' lives and ease of doing business in every way possible. Kisan Udyog farmers pay cash rent, which is a common relationship between farmers and landowners.
      •	The rent is kept in a unique bank account held by the entity to reserve against any taxes owed or potential capital improvements until payout in December.
      •	We charge a flat annual administration fee of 0.75% (of overall farm value) that is typically deducted from the income of the farm.`,
    },
    {
        label: 'Distribution',
        description: `
        •	Kisan Udyog disburses excess annual income to investors. We would generally expect an unlevered yield of 3% - 5% for lower-risk properties.
        •	Investors in each farm receive dividends each December in addition to expected annual value appreciation.
        •	Any necessary tax documentation will be provided by February of the following year, well in advance of tax season.`,
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
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
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
          <Typography variant="h5">Your Farm land is ready!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset to view all steps again
          </Button>
        </Paper>
      )}
    </Box>
  );
}
