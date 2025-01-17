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
            <span className="worksDesc">I take enjoyment and thrive in creating whole experiences to shape ideas completely and take pride in creating outstanding work down to each line of code and like to spin up ideas. I am eager to offer my skills and knowledge to help businesses achieve their goals.</span>
            <div className="worksImgs">
                <a href="https://starfish-app-hay8g.ondigitalocean.app/">Sample dashboard layout
                    <img src={Portfolio1} alt="" className="worksImg"/>
                </a>
                <a href="https://ucbadminton.club/">raw HTML/CSS club page
                    <img src={Portfolio2} alt="" className="worksImg"/>
                </a>

                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />
                <img src={Portfolio6} alt="" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;