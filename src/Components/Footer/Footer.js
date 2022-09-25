import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
    return (
        <footer style={{ marginTop: '120px' }} className='shadow-lg'>
            <div style={{ height: '50px', backgroundColor: 'lightgray' }}></div>
            <div style={{ backgroundColor: '#111b3b' }}>
                <section className='container'>
                    <div className="row g-0 ">
                        <div className="col-sm-12 col-md-4">
                            <div style={{ height: '300px' }} className="text-light text-start border border-secondary border-top-0 p-4 pt-5 lh-1">
                                <h3>contact us</h3>
                                <p> <FontAwesomeIcon className='text-muted' icon={faPhone}></FontAwesomeIcon>
                                    <small className='ms-2'>+8801919999999</small>
                                </p>
                                <p>
                                    <FontAwesomeIcon className='text-muted' icon={faEnvelope}></FontAwesomeIcon>
                                    <small className='ms-2'> schedule@gmail.com</small>
                                </p>
                                <p>
                                    <FontAwesomeIcon className='text-muted' icon={faLocationDot} />
                                    <small className='ms-2'>PO BOX 7091, Dhaka</small>
                                </p>
                                <p>
                                    <FontAwesomeIcon className='text-muted' icon={faClock}></FontAwesomeIcon>
                                    <small className='ms-2'>Opening : 8.00AM-22PM</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div style={{ height: '300px' }} className="text-light text-start border-start-0 border border-secondary p-4 pt-5">
                            <h1 className='lh-1 text-center'>My Schedule</h1>
                            <p className='text-center'><small>the best todo site</small></p>
                            <p className='text-center'><small><em>"My goal, my schedule. "</em></small></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div style={{ height: '300px' }} className="text-light text-start border-start-0 border border-secondary  p-4 pt-5">
                                <h5><small>NEWSLETTER</small> </h5>
                                <p><small>Sign up newsletter to receive special offers and exclusive news about Metros products</small> </p>
                                <p><input className='w-100 border-0 p-2 text-secondary mt-4' type="button" value="ENTER YOUR ADDRESS" /></p>
                                <p><input className='w-100 border-0 p-2 bg-danger text-light' type="button" value="SUBSCRIBE" /> </p>

                            </div>
                        </div>
                    </div>
                </section>

                <div style={{ height: '1px' }} className='bg-secondary w-100'></div>
                <section className='container text-center'>
                    <img className='mb-2' src="" alt="" />
                    <p className='text-white text-center py-4 mb-0'><small> copyright &copy; {year} My Schedule. All rights reserved.</small></p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;