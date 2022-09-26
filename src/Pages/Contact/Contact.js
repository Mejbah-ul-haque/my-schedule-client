import React from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
  
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_x7w4x05', 'template_cf6efrc', e.target, 'py1vok5OC94ozveHw' )
      .then((result) => {
          console.log(result.text);
          toast('Message sent successfully')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
      
    
  }
  return (
    <div style={{ margin: '100px 0' }} className="container d-block mx-auto">
      <h3 className="text-success text-center mt-5"><span className="border border-warning rounded text-warning px-5 py-2">Contact Form</span></h3>
      <div style={{ opacity: '.7'}} className="row mt-5">
        <div className="col-sm-12 col-lg-8 d-block mx-auto">
        <form onSubmit={sendEmail}>
                <lebel className="text-secondary fw-bold ms-2">Your Name</lebel>
                <input type="text" className="form-control mb-3 mt-1" placeholder="Name" name="name" />

              <lebel className="text-secondary fw-bold ms-2">Your Adsress</lebel>
                <input type="email" className="form-control mb-3 mt-1" placeholder="Email Address" name="email" />
              <lebel className="text-secondary fw-bold ms-2">Subject</lebel>
                <input type="text" className="form-control mb-3 mt-1" placeholder="Subject" name="subject" />
              <lebel className="text-secondary fw-bold ms-2">Write Your Message</lebel>
                <textarea className="form-control mb-5 mt-1" id="" cols="30" rows="8" placeholder="Your message" name="message" />
                <input type="submit" className="btn btn-warning rounded-pill d-block mx-auto px-5 py-2 fw-bold text-uppercase" value="Sent Message" />   
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;