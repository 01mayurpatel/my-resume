import React from 'react'
import './Review.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from "react"
// import { themeContext } from '../../Context';
// import { useContext } from "react";


// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import Container from 'react-bootstrap/Container';


function Review() {
    const transition = { duration: 1.5, type: 'spring' }

    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mess, setMess] = useState('');
    const [sub, setSub] = useState('');
    const [isLoading, setLoading] = useState(false);

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_fjubfuk', 'template_esw0ene', form.current, 'CK53sJDI2Mvw26l3S')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                setLoading(false);
                setName('');
                setEmail('');
                setMess('');
                setSub('');

            }, (error) => {
                console.log(error.text);
            });
    };


    return (

        <div id='Contact' className='pb-4'>
           
            <div
                initial={{ scale: (0) }}
                whileInView={{ scale: (1) }}
                transition={transition}>
                <Container className='form-main'>
                  
                        
                        <Col xs={12} md={6} className='mt-3  social-m ml-2 mr-2 pb-3' >
                            <div className='p-4   ' style={{}}>
                            <div className='monu px-3'><input type="file" /></div>
                                <form ref={form} onSubmit={sendEmail} >
                                
                                    <div style={{ width: '100%', display: 'inline-flex' }}>
                                        <span style={{ width: '50%', padding: '3%' }}>
                                            <input  type="text" className="user f-items" name='user_name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}     />

                                        </span>
                                        <span style={{ width: '50%', padding: '3%' }}>
                                            <input  type="email" name='user_email' className='user f-items' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </span>
                                    </div>

                                    <div style={{ padding: '3%', paddingTop: '0' }}>
                                        <input  value={sub} type="text" className="subject user f-items" name='subject' placeholder='Subject' onChange={(e) => setSub(e.target.v)} />
                                    </div>
                                    <div style={{ padding: '3%', paddingTop: '0' }}>
                                        <textarea  name="message" className="user f-items" value={mess} placeholder='Message' onChange={(e) => setMess(e.target.value)} />
                                    </div>
                                    <div style={{ padding: '3%' }} className='text-center'>

                                        <button type="submit" className="button" > {isLoading ? 'Sending...' : 'Send Message'}</button>
                                      



                                    </div>
                                    <div className="sent_text">
                                        <span >{done && "Message Sent"}</span>
                                        <br />
                                        <span>{done && "Thanks for contacting me!"}</span>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    
                </Container>
            </div>
        </div>
    )
}

export default Review