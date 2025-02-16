import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const projects = [
    // {
    //     name: "NZ Visa Helper Website (in progress)", TODO: add this back in
    //     link: "https://ucbadminton.club/",
    //     image: Portfolio2,
    //     description: "A website to assist with NZ visa applications."
    // },
    {
        name: "Gardeners Social and Livestreaming App",
        link: "https://github.com/plantleafboy/seng302project",
        image: Portfolio2,
        description: "A social platform for gardeners with livestreaming features."
    },
    {
        name: "Dashboard Layout - CSS Grid",
        link: "https://starfish-app-hay8g.ondigitalocean.app/",
        image: Portfolio1,
        description: "A responsive dashboard layout built using CSS Grid."
    },
    {
        name: "HTML/CSS Club Page",
        link: "https://ucbadminton.club/",
        image: Portfolio2,
        description: "A simple club page built with HTML and CSS."
    },
    {
        name: "Calculator",
        link: "https://shark-app-rlemm.ondigitalocean.app/",
        image: Portfolio2,
        description: "A functional calculator app."
    },
    {
        name: "Etch-a-Sketch",
        link: "https://lionfish-app-ujlor.ondigitalocean.app/",
        image: Portfolio2,
        description: "A digital version of the classic Etch-a-Sketch."
    }
];

const Works = () => {
    return (
        <section id='works'>
            <h1 className="worksTitle">My Portfolio</h1>
            <span className="worksDesc">I take enjoyment in shaping engaging user experiences. As a full stack developer, I can code an effective backend that works seamlessly and enhances the user experience whilst maintaining a robust and secure back end environment.I am eager to offer my skills and knowledge to help businesses achieve their goals.</span>

            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </a>
                    </li>
                ))}
            </ul>

            {/*<div className="worksImgs">*/}
            {/*    /!*<a href="https://ucbadminton.club/">raw HTML/CSS club page*!/*/}
            {/*    /!*    <img src={Portfolio2} alt="" className="worksImg"/>*!/*/}
            {/*    /!*</a>*!/*/}
            {/*    /!*<a href="https://ucbadminton.club/">raw HTML/CSS club page*!/*/}
            {/*    /!*    <img src={Portfolio2} alt="" className="worksImg"/>*!/*/}
            {/*    /!*</a>*!/*/}
            {/*    <a href="https://ucbadminton.club/">NZ Visa Helper Website*/}
            {/*        <img src={Portfolio2} alt="" className="worksImg"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://ucbadminton.club/">Gardeners Social and livestreaming app*/}
            {/*        <img src={Portfolio2} alt="" className="worksImg"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://starfish-app-hay8g.ondigitalocean.app/">Dashboard layout - css grid*/}
            {/*        <img src={Portfolio1} alt="" className="worksImg"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://ucbadminton.club/">HTML/CSS club page*/}
            {/*        <img src={Portfolio2} alt="" className="worksImg"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://shark-app-rlemm.ondigitalocean.app/">Calculator*/}
            {/*        <img src={Portfolio2} alt="" className="worksImg"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://lionfish-app-ujlor.ondigitalocean.app/">Etch-a-Sketch*/}
            {/*        <img src={Portfolio2} alt="" className="worksImg"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<button className="workBtn">See More</button>*/}
        </section>
    );
}

export default Works;