import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">About me</span>
            <span className="skillDesc">I am a full stack developer specialising in creating engaging UI and effective backend work. I have a Bachelors in computer science from the University of Canterbury and am proficient in <b>React, HTML, CSS, and JS/TS, java, spring</b>. as well as design software such as Adobe Photoshop and figma.</span>
            <span>In my spare time I enjoy playing badminton, listening to alternative music and learning</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I have used UI libraries such as Mantine and MUI for React and templating libraries like thymeleaf and raw CSS.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Server side</h2>
                        <p>I have created server API's for frontend applications and utilized external API and with SQL databases. springboot/express/java/</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p> I have experience in Android mobile design using Kotlin with Android compose</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;