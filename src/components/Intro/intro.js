import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Alex</span> <br />Full stack Developer</span>
                <p className="introPara">I am a budding dev with a passion for creating valuable UI and effective backend solutions<br /> for a cohesive user experience.</p>
                {/*<Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>*/}
            </div>
            {/*<img src={bg} alt="Profile" className="bg" />*/}
        </section>
    );
}

export default Intro;