import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Navbar from '../components/navbar2'
import Footer from '../components/footer'

export const faq = () => {
  return( 
  <>
  <Navbar />
  <Grid container>
  <Grid xs={12} sm={12} md={6} lg={6}>
    <img className="faq_image" src="/images/faq_img.png" />
  </Grid>

  <Grid xs={12} sm={12} md={6} lg={6} sx={{padding: 5}}>
    <Typography variant="h2">F A Q</Typography>
    <br />
        <div className="col">
        <div className="Accordion">
            <Accordion className="acc-item">
            <Accordion.Item eventKey="0">
                <Accordion.Header className="acc-title"> What are the workings of Krishi-Invest?</Accordion.Header>
                <Accordion.Body className="acc-body">
                Investors can use Krishi-Invests' online platform to invest in farmland in a secure environment without facing many of the traditional challenges of owning and operating farmland. In addition, investors can view potential farm offerings, review due diligence documents of the farms, and, if interested, transfer money and sign legal documents securely online. Investors can access information on their investments through our investor dashboard 24/7.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>When will I be able to get my investments back from Krishi-Invest? </Accordion.Header>
                <Accordion.Body className="acc-body">
            The expected hold period varies from property to property, typically 2,5, or 10. A hold period is the anticipated time investors will be involved with the investment until the underlying property is re-sold. However, we are currently exploring a secondary marketplace that would allow investors to sell their shares pending an initial 1-year lockup period. There is no guarantee this marketplace will be established, that there will be demand for your shares, or that the secondary market will provide a trading forum. It is important that you are able to hold your investment for the intended hold period.       </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What kind of investors are eligible to invest in Krishi-Invest?</Accordion.Header>
                <Accordion.Body className="acc-body">
                The individual investor must meet one of the following criteria: Your net worth, or joint net worth with your spouse or spousal equivalent, excluding your principal residence, is at least Rs5,00,000. Your income for the last two years averaged at least 2lpa.During the last two years, your income was at least 2 lpa, and you expect it to be at least 2 lpa this year. During the last two years, the combined income of you and your spouse or spousal equivalent was at least 3 lpa, and you expect it to be at least 3 lpa this year. Even non Indian citizens can invest  if they legal residents of India.
        </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Is my investment liquid?</Accordion.Header>
                <Accordion.Body className="acc-body">
                No. The real estate investments found on Krishi-Invest are private transactions in physical properties. The investments are not traded on public stock exchanges and cannot be easily sold or traded. You may be able to resell your investment security in a private transaction subject to restrictions that are specific to each investment. Since the resale restrictions on Krishi-Invest can be very limiting, you should not invest with the expectation of reselling your investment
            
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>What are the methods Krishi-Invest uses to find farm lands and farmers?
                </Accordion.Header>
                <Accordion.Body className="acc-body">
                We have a large network of sources that includes farmers, website visitors, real estate brokers, land funds, land managers, and industry contacts. We have a comprehensive farm review process and only accept a very small percentage of the land parcels we examine.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>Does Krishi-Invest provide good security?</Accordion.Header>
                <Accordion.Body className="acc-body">
                We have taken extensive steps to ensure that all personal data entered into AcreTrader is safe and secure. We use 256-bit encryption, the highest level of encryption commercially available, to ensure that every transaction, financial or otherwise, is processed securely.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>What is the risk of investing on Krishi-Invest?</Accordion.Header>
                <Accordion.Body className="acc-body">  Like all forms of investing, Krishi-Invest entails risk. As an investor, you must be prepared for the potential loss of all of your investment. Please review the risks under the associated disclosure documents. 
                If the potential loss will render you unable to survive financially, or you are unwilling to accept the potential loss of capital you have invested, we do not recommend you invest with us, or anyone else. With that fact established, we understand the value of total due diligence, deep underwriting of potential investments, and other basics that control our risk. We are committed to offering only investments that meet our stringent criteria.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>

        </div>
  </Grid>
  </Grid>

  <Footer />

  </>
  );
};

export default faq;
