import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/linkedin.png';
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Pathum Theekshana</span> <br />Full stack Developer</span>
                <p className="introPara">I am a skilled full stack developer with experience <br/>in building robust, scalable, and efficient web applications<br/> from front-end design to back-end functionality.</p>
                <Link><button className="btn" onClick={() => window.open('https://www.linkedin.com/in/pathum-theekshana-a24b27287/')}><img src={btnImg} alt="Hire" className='btnImg'/> Connect with me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;