import React from 'react'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { Link } from 'react-router-dom';  
import './Footer.css'

function Footer() {
  return (
    <>
      <div className='foot social-links'>
        <Container className=''>
          <div className=' p-3 text-ceneter flex text-center'>
            <FacebookIcon className='m-3 social-icon' />
            <InstagramIcon className='m-3 social-icon'/>
            <TwitterIcon className='m-3 social-icon'/>
            <GitHubIcon className='m-3 social-icon'/>
            <LinkedInIcon className='m-3 social-icon'/>
            <PinterestIcon className='m-3 social-icon'/>
            <YouTubeIcon className='m-3 social-icon'/>
          </div>
          
          <div className='text-center'>
          <p className='text-light'>© All rights reserved.</p>
          </div>
        </Container>
        
      </div>
    </>
  )
}

export default Footer
