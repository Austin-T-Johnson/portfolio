import React, { useState } from 'react';
import axios from 'axios';
import projects from './JSON/projects.json';
import skills from './JSON/skills.json';
import aj from './assets/aj-circle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from '../src/pdf/resume.pdf';
import toast, { Toaster } from 'react-hot-toast';



const Landing = () => {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
    
 

    const onSubmit = async (e) => {
        e.preventDefault();
        let post = {name: name, email: email, message: message};
        try {
            if(name == "" || email == "" || message == "") {
                toast.error("Please fill out all fields")
            } else {
               await axios.post("/api/contact", post);
            toast.success("Message Sent!") 
            setName('')
            setEmail('')
            setMessage('')
            }
            
        } catch (error){
        console.log(error)
       }
       
   
    }
    return (
        <>
            <div className="header-container">

                <div className="header-text-container">
                    <h1>Austin Johnson |</h1>
                    <h2>Full Stack Web Developer</h2>
                </div>
                <div className="socials">
                    
                    <div className="social-container">
                      <a href="https://github.com/Austin-T-Johnson" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faSquareGithub} /></a>
                        <span>GitHub</span>
                    </div>
                    <div className="social-container">
                        <a href="https://www.linkedin.com/in/austin-t-johnson/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
                         <span>LinkedIn</span>
                    </div>
                    <div className="social-container">
                    <a href= {resume} target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-icon" icon={faFilePdf} /></a>
                    <span>Resume</span>
                    </div>
                </div>
            </div>
            <div className="separator-left"></div>
                <div className="separator-angle"></div>
                <div className="separator-right"></div>
                
            

            <div className="about-section-container">
                <div className="about-text">
                  <h1 className="about-h1">
                    <span>About Me</span>
                    </h1>
                    <br></br><br></br>
                    <span>
                        I grew up loving music and art. I have a passion for design, which drew me to web development. Creating with code and laying out a good looking page is what I love to do and strive for in every page I create. I have worked on projects ranging from an <strong>Asylum Status Tracker</strong> for a non-profit, to <strong>Profession Business Sites</strong> for various companies, even a few just for fun projects such as a <strong>Crypto Tracker, </strong><strong>Translator App, </strong> and <strong>Weather App</strong>
                    </span>
                </div>
                <div className="about-img">
                    <img src={aj} className="aj" alt="austin johnson"></img>
                </div>
            </div>
            <h1 className="my-portfolio">My Portfolio</h1>
            <div className="portfolio-section-container">
                {projects.map((proj) => {
                    return (
                        <div className="proj-container" key={proj.id}>
                            <div className="proj-img"><img src={proj.img} alt="project images"></img></div>
                            <div className="proj-txt"><span>{proj.txt}</span></div>
                        </div>
                    )
                })}
            </div>
            <h1 className="skills-h1">Skills</h1>
            <div className="skills-container">
                {skills.map((skill) => {
                    return (
                        <div className="skills-inner-container">
                            <div className="skill-text-div">
                                <h3 >{skill.name}</h3>
                                <span>{skill.txt}</span>
                            </div>
                            <div className="skill-img-div">
                                <img className="skill-img" src={skill.img} alt="skill images"></img>
                            </div>
                        </div>

                    )
                })}
            </div>

            <section className="form">
                <div className="get-in-touch-div">
                    <h2 className="get-in-touch">Get In Touch</h2>
                </div>

                <span>I'd love to hear from you about a project or if you're simply just curious about something, I'm always available and happy to answer any questions!</span>
                <form className="contact-form">
                    <div className="input-div">
                        <label className="label">Name</label>
                        <input value={name}  onChange={(e) => setName(e.target.value)} className="input-input" type="text" />
                    </div>

                    <div className="input-div">
                        <label className="label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-input" type="email" />
                    </div>

                    <div className="input-div">
                        <label className="label">Message</label>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} className="input-input" type="text" />
                    </div>
                </form>
                <div className="btn-content">
                    <button onClick={onSubmit}>Send It!</button>
                    <Toaster />
                </div>
            </section>
        </>
    )
}

export default Landing