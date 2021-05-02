import React, { useState } from 'react';
import pic1 from '../../../resource/project/a-handyman-service.web.app_.png';
import pic2 from '../../../resource/project/gadget-world-8d027.web.app_.png';
import pic3 from '../../../resource/project/deshi-riders-3ecaa.web.app_.png';
import pic4 from '../../../resource/project/english-premier-league-team.netlify.app_.png';
import pic5 from '../../../resource/project/kolkata-knight-riders-team-builder.netlify.app_.png';
import pic6 from '../../../resource/project/fariaabid.github.io_hard-rock-music_.png';
import ProjectCard from '../ProjectCard/ProjectCard';
// import ProjectCard from '../../ProjectCard/ProjectCard';

const Project = () => {
    const [projectInfo] = useState([
        {
            image: pic1,
            projectName: 'A HANDYMAN SERVICES',
            projectDetails: 'Built a MERN stack web application with a dynamic service section and feedback  section.A client can sign in with Google, order for a service & can give feedback. ∙ A client can check their ordered list and current status in their dashboard. ∙ Here authenticated admin panel is available & admin can see orders in the admin  dashboard.An admin can add a new service which will be visible in the services & can make a  new admin. ',
            githubLink: 'https://github.com/fariaabid/Handyman-Services',
            websiteLink: 'https://a-handyman-service.web.app/',
        },
        {
            image: pic2,
            projectName: 'GADGET WORLD',
            projectDetails: 'Built a MERN stack web application with dynamic product list. A customer can sign in with Google & can choose products for a specific date.Customers can see their registered task in their event dashboard.An admin can add new product which will be visible in the activities section.An admin also can see the registered product list with detailed information. ∙ ',
            githubLink: 'https://github.com/fariaabid/Gadget-World',
            websiteLink: 'https://gadget-world-8d027.web.app/',
        },
        {
            image: pic3,
            projectName: 'DESHI RIDERS',
            projectDetails: 'Developed an application with booking options for passengers and showing various vahicle options. Integrated firebase authentication with Google sign-in, Facebook login and custom  authentication also. Authenticated users can choose a place.Getting vehicle for booking by providing dates & Google map was included.',
            githubLink: 'https://github.com/fariaabid/Deshi-Riders',
            websiteLink: 'https://deshi-riders-3ecaa.web.app/',
        },
        {
            image: pic4,
            projectName: 'ENGLISH PREMIER LEAGUE',
            projectDetails: 'The English Premier League is now the world’s richest league in money, which comes close to over 3 billion English Pounds Sterling. According to Deloitte, of the 30 highest-earning clubs in Europe in 2013-14, 14 were from the EPL. Among the clubs, Liverpool earned the largest share of broadcast revenue in 2013-14, at $148.7 million. The league has seen 23 clubs as champions of the 47 clubs that have been playing in the Premier League since 1992.From this project, you will learn in details about each team in this league.',
            githubLink: 'https://github.com/fariaabid/English-Premier-League',
            websiteLink: 'https://english-premier-league-team.netlify.app/',
        },

        {
            image: pic5,
            projectName: 'KOLKATA KNIGHT RIDERS',
            projectDetails: "A Complete mobile responsive single page application using React Bootstrap called 'KOLKATA KNIGHT RIDERS'. Here a user can see different player names, their coutry name, salary and can pick a player for this team.",
            githubLink: 'https://github.com/fariaabid/kolkata-knight-riders',
            websiteLink: 'https://kolkata-knight-riders-team-builder.netlify.app/',
        },

        {
            image: pic6,
            projectName: 'HARD ROCK MUSIC',
            projectDetails: 'A responsive lyrics searching Website using Bootstrap where user can see different song lyrics. User also play the song.',
            githubLink: 'https://github.com/fariaabid/hard-rock-music',
            websiteLink: 'https://fariaabid.github.io/hard-rock-music/',
        },
    ])
    return (

        <div style={{ backgroundColor: '#F4F7FC' }}>
            <div id="project" className="container pt-5" style={{ overflowX: 'hidden' }}>
                <h1 className="text-center text-uppercase" >Latest Project</h1>
                <div className="row mt-5">
                    {
                        projectInfo.map(projectInfo => <ProjectCard key={projectInfo.image} projectInfo={projectInfo}></ProjectCard>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Project;