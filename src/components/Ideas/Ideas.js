import React from 'react'
import NavbarHead from "../Navbar/NavbarHead";
import Footer from "../Footer/Footer"
import Videos from '../Videos/Videos';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Col'
import Review from '../Review/Review';
import './Ideas.css'
function Ideas() {
  return (
    <div>
      <NavbarHead/>
        <div className='text-center mt-5'>
        <h1><span className='start'>CONFUSED ?</span> Watch These </h1>


        </div>
        <Videos/>
        <div className='text-center mt-1 '>
        <h2>Send Your Resume,</h2>
       
        <h2>Our <span className='start2'>EXPERTS </span> Will Review It</h2>
        <Review/>

        </div>
      <Footer/>
    </div>
  )
}

export default Ideas
