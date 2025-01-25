import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take enjoyment in shaping engaging user experiences. As a full stack developer, I can code an effective backend that works seamlessly and enhances the user experience whilst maintaining a robust and secure back end environment.I am eager to offer my skills and knowledge to help businesses achieve their goals.</span>
            <div className="worksImgs">
                {/*<a href="https://ucbadminton.club/">raw HTML/CSS club page*/}
                {/*    <img src={Portfolio2} alt="" className="worksImg"/>*/}
                {/*</a>*/}
                {/*<a href="https://ucbadminton.club/">raw HTML/CSS club page*/}
                {/*    <img src={Portfolio2} alt="" className="worksImg"/>*/}
                {/*</a>*/}
                <a href="https://starfish-app-hay8g.ondigitalocean.app/">Sample dashboard layout
                    <img src={Portfolio1} alt="" className="worksImg"/>
                </a>
                <a href="https://ucbadminton.club/">raw HTML/CSS club page
                    <img src={Portfolio2} alt="" className="worksImg"/>
                </a>

                <a href="https://shark-app-rlemm.ondigitalocean.app/">Styled Calculator
                    <img src={Portfolio2} alt="" className="worksImg"/>
                </a>
                <a href="https://ucbadminton.club/">raw HTML/CSS club page
                    <img src={Portfolio2} alt="" className="worksImg"/>
                </a>
                <a href="https://lionfish-app-ujlor.ondigitalocean.app/">Etch-a-Sketch JS event project
                    <img src={Portfolio2} alt="" className="worksImg"/>
                </a>
            </div>
            {/*<button className="workBtn">See More</button>*/}
        </section>
    );
}

export default Works;