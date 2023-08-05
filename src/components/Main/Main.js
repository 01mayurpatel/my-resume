import React from 'react'
import pic from './pic.jpg';
import { faAnglesUp, faCashRegister, faChartSimple, faDownload, faFile, faFire, faPen, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import Navbars from '../Navbar/NavbarHead';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import lines from "../../lines.svg"
import Footer from "../Footer/Footer"
import './Main.css';
function Main() {
  return (
    <div>
      <Navbars />
      {/* <div className='header'> */}
        {/* <div className='head-left'>
          <div className='left-child'>
            <h1><span className='start'>START</span> Your Carrer By </h1>

            <h1>Creating <span className='start'>FREE RESUME</span> Now</h1>
            <Link to="/body"> <button className='button'>CREATE RESUME</button></Link>

            <FontAwesomeIcon icon={faAnglesUp} bounce className='up-icon' /> */}
        {/* <FontAwesomeIcon icon={faFacebook}/> */}

          {/* </div>
        </div>
        <div className='head-right'>
          <img src={pic} />
        </div>
      </div> */}
      <Container>
      <div className='first-block '>
        <Row >
          <Col lg="6" md="6" xm="12" className=''>

          <div className='left-child text-center'>
            <h1><span className='start'>START</span> Your Carrer By </h1>

            <h1>Creating <span className='start'>FREE RESUME</span> Now</h1>
            <Link to="/body"> <button className='button'>CREATE RESUME</button></Link>
            <br/>
            <FontAwesomeIcon icon={faAnglesUp} bounce className='up-icon pb-5' />
        

          </div>
          </Col>
          <Col lg="6" md="6" xm="12" className='top-right'>
          <img className='pic-right ' src={pic}/>

          </Col>
        </Row>

      </div>
      </Container>
      <div className='second pt-5'>
        <Container className='main_second pt-4 mt-3 '>
          <div className='text-center pb-5'>
            <h2 className='mt-5 pb-2'>EASY STEPS TO CREATE YOUR PERFECT RESUME</h2>

          </div>
          <Row>

            <Col className='second_col text-center p-4' xs = "12" md = "4" lg="4">

              <FontAwesomeIcon icon={faPen} flip className='icon-second mb-5' />

              <h4 className='mb-4'>FILL OUT NECESSARY DETAILS</h4>
              <hr></hr>
              <p>Our form based entries are designed strictly following all industry guidelines and best practices that employers resume have.</p>
            </Col>
            <Col className='second_col text-center p-4' xs = "12" md = "4" lg="4">

              <FontAwesomeIcon icon={faFile} regular bounce className='icon-second mb-5' />


              <h4 className='mb-4'>CHOOSE YOUR
                RESUME TEMPLATE</h4>
              <hr></hr>
              <p>Our professional resume templates are designed strictly following all industry guidelines and best practices that employers look for.</p>
            </Col>
            <Col className='second_col text-center p-4' xs = "12" md = "4" lg="4">

              <FontAwesomeIcon icon={faDownload} shake className='icon-second mb-5' />

              <h4 className='mb-4'>DOWNLOAD
                YOUR RESUME FOR FREE</h4>
              <hr></hr>
              <p>Start impressing employers. Download your awesome resume and land the job you are looking for, effortlessly.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='third'>
        <Container className='third-one p-5'>
          <Row>
            <Col xs = "12" md = "6" lg="6">
              <h2>Why To Use My-Resume Builder? Because it's</h2>
            </Col>
            <Col xs = "12" md = "6" lg="6">
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col className='third-item pt-3 third-pehla' xs = "12" md = "6" lg="6">
              <Row className='pt-4 pb-4 p-2 '>
                <Col lg="4" md="4" xs="4 " className=' text-end p-4' >
                  <FontAwesomeIcon icon={faFire} className='icon-third mb-5 mt-5' />
                </Col>
                <Col lg="8" md="8" xs="8" className='third-col'>
                  <h3 className='mt-5'>Completely Free</h3>
                  <h6 className='mb-3'>We offer both free and premium features but without costing anything. On a budget? That's OK too - you can use our resume buider completely free of charge.</h6>
                </Col>
              </Row>
            </Col>
            <Col className='third-item pt-3 third-dusra' xs = "12" md = "6" lg="6">
              <Row className='pt-4 pb-4 p-2 '>
                
                <Col lg="8" md="8" xs="8" className='third-second-col'>
                  <h3 className='mt-5 text-end'>Creative and Professional Resume Templates</h3>
                  <h6 className='mb-3 text-end'>Whatever resume template you're looking for, we've got it! Whether it's a classic black-and-white template, or something a bit more outside the box, we have what you need!</h6>
                </Col>
                <Col lg="4" md="4" xs="4 " className=' text-start p-4' >
                  <FontAwesomeIcon icon={faChartSimple} className='icon-third mb-5 mt-5' />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className='third-item pt-3 third-teesra' xs = "12" md = "6" lg="6">
              <Row className='pt-4 pb-4 p-2 '>
                <Col lg="4" md="4" xs="4 " className=' text-end p-4' >
                  <FontAwesomeIcon icon={faSackDollar} className='icon-third mb-5 mt-5' />
                </Col>
                <Col lg="8" md="8" xs="8" className='third-col' >
                  <h3 className='mt-5'>NO Hidden Fees</h3>
                  <h6 className='mb-3'>You won’t spend hours working on your resume, just to be hit with a hidden paywall. Our resume builder will notify you if you’re using any of our premium features in advance.</h6>
                </Col>
              </Row>
            </Col>
            <Col className='third-item pt-3 third-chautha' xs = "12" md = "6" lg="6">
              <Row className='pt-4 pb-4 p-2 '>
                
                <Col lg="8" md="8" xs="8" className='third-second-col'>
                  <h3 className='mt-5 text-end'>ATS-Friendly</h3>
                  <h6 className='mb-3 text-end'>Our resume templates are ATS-friendly. It means your resume won’t automatically be rejected because an ATS can’t read it.</h6>
                </Col>
                <Col lg="4" md="4" xs="4 " className=' text-start p-4' >
                  <FontAwesomeIcon icon={faCashRegister} className='icon-third mb-5 mt-5' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
       <div className='text-center'> <Link to="/body"> <button className='button'>MAKE YOUR RESUME NOW</button></Link></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Main
