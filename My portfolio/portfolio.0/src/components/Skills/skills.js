import React, { useState } from 'react';
import './skills.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Import images for each language
import js from '../../assets/js.png';
import python from '../../assets/python.png';
import java from '../../assets/java.png';
import cpp from '../../assets/c-.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';

const Skills = () => {
    const skills = [
        { name: 'Programming Skill', percentage: 85 },
        { name: 'Design Skill', percentage: 90 },
        { name: 'Problem Solving Skill', percentage: 95 },
        { name: 'Technical Skill', percentage: 89 },
    ];

    const languages = [
        { name: 'JavaScript', image: js },
        { name: 'Python', image: python },
        { name: 'Java', image: java },
        { name: 'C++', image: cpp },
        { name: 'HTML', image: html },
        { name: 'CSS', image: css },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 4) % languages.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? languages.length - 4 : prevIndex - 4
        );
    };

    const visibleLanguages = languages.slice(
        currentIndex,
        currentIndex + 4
    );

    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
            I am a BSc (Hons) Software Engineering undergraduate at NSBM Green University, passionate about applying theoretical knowledge to real-world projects. My academic journey has equipped me with a solid foundation in software development, system architecture, and UI/UX design. Notably, I contributed to the development of an online auction platform utilizing ASP.NET Core and SQL Server, and participated in designing a mobile application focused on enhancing the spare parts marketplace experience. These projects have honed my skills in full-stack development, user-centric design, and collaborative teamwork. I am committed to continuous learning and eager to contribute to innovative ICT solutions.
            </span>
            <span className="skillTitle1">Skills</span>
            <div className="skillCards">
                {skills.map((skill, index) => (
                    <div className="skillCard" key={index}>
                        <CircularProgressbar
                            value={skill.percentage}
                            text={`${skill.percentage}%`}
                            styles={buildStyles({
                                textColor: '#ffff00',
                                pathColor: '#ffff00',
                                trailColor: '#e0e0e0',
                            })}
                        />
                        <h2>{skill.name}</h2>
                    </div>
                ))}
            </div>
            <span className="skillTitle1">Languages</span>
            <div className="slider">
                <button className="prevButton" onClick={prevSlide}>
                    &#10094;
                </button>
                <div className="sliderContent">
                    {visibleLanguages.map((language, index) => (
                        <div className="languageCard" key={index}>
                            <img
                                src={language.image}
                                alt={language.name}
                                className="languageImage"
                            />
                            <h3>{language.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="nextButton" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default Skills;

