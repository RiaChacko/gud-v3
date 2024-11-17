import "./Landing.css"
import '../App.css'
import eventsImage from "../assets/landing/events1.png"
import galleryImage from "../assets/landing/Gallery.png"
import resourcesImage from "../assets/landing/Resources.png"
import designTImage from "../assets/landing/DesignTeams.png"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { Carousel } from "../components/Carousel"
import axios from "axios";
import { toast } from 'react-toastify';
import { GiPlayButton } from "react-icons/gi";
function Landing() {

    const [shouldNavigate, setShouldNavigate] = useState(false);
    const [navigateTo, setNavigateTo] = useState(null);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://gud-backend.onrender.com/api/signup',{email});
            if(response.status === 201){
                toast.success('Signed up successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    onClose: () => window.location.reload()
                  });

            }
            setMessage(response.data.msg);
        } catch (err) {
            setMessage(err.response ? err.response.data.msg: 'An error occurred');
            toast.error('Failed to sign up. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
              });
        }
        
    };

    useEffect(() => {
        if (shouldNavigate) {
            navigate(navigateTo);
        }
    }, [shouldNavigate, navigate]);

    const handleClick = (path) => {
        setShouldNavigate(true);
        setNavigateTo(path);
        
    };

    
    return (
   

        <div className={`full-container ${!isOpen ? '' : 'collapsed'}`}>
            {/* <div class="container">
                <div class="background-image"></div>
                <h1 class="centered-text">Gator User Design</h1>
            </div> */}
            <Carousel/>
            <div className="description-title">
                <h3>What do we do?</h3>
            </div>
            <div className="description">
                <p>
                The Gator User Design club focuses on introducing students to user experience design technologies and techniques, as well as providing an opportunity to collaborate with talented individuals from other areas (engineering, business, etc). Together, we help our members create portfolio pieces, network with industry, and open doors to many opportunities for the future.
                </p>
            </div>

            <div className="four-sections">
                <div className="box">
                    <img src={eventsImage} onClick={() => handleClick('/events')}></img>
               
                </div>
                <div className="box">
                <img src={galleryImage} onClick={()=>handleClick('/gallery')}></img>
                </div>
                <div className="box">
                <img src={resourcesImage} onClick={() => handleClick('/resources')}></img>
                </div>
                <div className="box">
                <img src={designTImage} onClick={()=>handleClick('/design-teams')}></img>
                </div>
            </div>

            <div className="faq">
            <div className="play">
                <h3 className="faq-title">FAQ</h3>
                <GiPlayButton onClick={toggleFAQ} className={isOpen ? 'rotated' : ''}/>
            </div>
            {isOpen && (
                <div className="section-2">
                    <h3 className="question">What is UI/UX Design?</h3>
                    <p>UI/UX design involves creating digital interfaces that are visually appealing (UI) and provide a positive user experience (UX). It focuses on aesthetics, usability, and user satisfaction.</p>
                    <h3 className="question">How to get involved?</h3>
                    <p>Attend events, join design teams, apply for leadership roles. Join our Slack and follow our social media for updates!</p>
                </div>
            )}
        </div>


            <div className="newsletter">
                <h3 className="newsletter-title">Sign up for our Newsletter</h3>
                <form onSubmit={handleSubmit}>
                <div className='input-div'>
                    <input className="email-input" type='text' placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Landing
