import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import NZ_visa_helper from '../../assets/NZ_visa_helper.png';
import invertocat from '../../assets/invertocat.png';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'xxx')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Work done</h1>
                <span className="clientDesc">
                    As a graduate, I am working on upskilling with my projects as viewable above. My Immigration website project was commissioned by NZ Visa Helper.
                </span>
                <div className="clientImgs">
                    <img src={NZ_visa_helper} alt="Client" className="clientImg"/>
                </div>
            </div>
            {/*<div id="contact">*/}
            {/*    <h1 className="contactPageTitle">Contact Me</h1>*/}
            {/*    <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>*/}
            {/*    <form className="contactForm" ref={form} onSubmit={sendEmail}>*/}
            {/*        <input type="text" className="name" placeholder='Your name' name='from_name' />*/}
            {/*        <input type="text" className="email" placeholder='Your Email' name='from_email' />*/}
            {/*        <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>*/}
            {/*        <button type="submit" value="Send" className='submitBtn'>Submit</button>*/}
            {/*        <div className="links">*/}
            {/*            <a href="https://github.com/plantleafboy" target="_blank">*/}
            {/*                <img src={invertocat} alt="Github repo" className="link" />*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    );
}


export default Contact;