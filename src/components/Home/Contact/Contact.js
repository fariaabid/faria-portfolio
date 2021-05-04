import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure();

const Contact = () => {

    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('gmail', 'gmail', e.target,
        'user_lNJtxNPbPpvXbOJymk5Lb')
            .then((result) => {
                console.log(result.text);
                toast.success('Message Send Successfully');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div style={{ backgroundColor: '#fffaf0',color:'black' }}>
            <div id="contact" className="container py-5" style={{ overflowX: 'hidden' }}>
                <h1 className="text-center text-uppercase pb-3" >Contact</h1>
               
                    <div className="col-md-12" data-aos="fade-left">
                        <h3 className="mb-4 text-center">Fill Free To Message Me</h3>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Enter Name" required />
                            </div>

                            <div className="form-group">
                                <input className="form-control" placeholder="Enter Email" type="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <textarea placeholder="Enter Your Message" className="form-control" name="message" cols="30" rows="5" required />
                            </div>

                            <div className="form-group">
                                <input className="btn send-btn btn-block text-light" type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Contact;