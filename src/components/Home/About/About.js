import React from 'react';
import faria from "../../../resource/image/faria_resume.jpg"
import './About.css';

const About = () => {
    return (
        <div style={{ backgroundColor: '#fffaf0' }}>
            <div id="about" className="container py-5" style={{ overflowX: 'hidden' }}>
                <h1 className="text-center text-uppercase" >About</h1>
                <div className="row about-container d-flex align-items-center mt-5">
                    <div className="col-md-6" data-aos="fade-right">
                        <img className="featureImg " src={faria} alt="" />
                    </div>
                    <div className="col-md-6 pt-5" data-aos="fade-left">
                        <h3 className="font-weight-bold">Technical Skills </h3>
                        <p className="mb-0"><b>Proficient: </b>JavaScript, ES6, React, React Router, React Hook, React Bootstrap, Firebase Authentication, JSON, REST API, HTML5, .CSS3, Bootstrap. </p>
                        <p className="mb-0"><b>Comfortable: </b>Node.js, Express.js, MongoDB, Material UI.</p>
                        <p className="mb-0"><b>Tools: </b>VS Code, Git, Chrome Dev Tool, Netlify, Heroku, Firebase</p>
                        <h3 className="font-weight-bold mt-3">Education </h3>
                        <p className="mb-0">JAHANGIRNAGAR UNIVERSITY</p>
                        <p className="mb-0">Bachelor of Science</p>
                        <p className="mb-0"><b>Department: </b>STATISTICS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;