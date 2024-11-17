import './About.css'
import aboutPic from '../assets/about/aboutPic.png';
import timline from '../assets/about/timeline.png';
import UI from '../assets/about/UserInterface.png';
import UX from '../assets/about/UserExperience.png';
import PD from '../assets/about/ProductDesign.png';
import mobileTimeline from "../assets/about/MobileTimeline.png";
import about from "../assets/about/gudrc-16.jpg";
function About() {
    return (
        
        <div className="about-container">
            <h1>About</h1>
            <div className='pic-with-description'>
                <img src={about}></img>
                <p>We believe in fostering a community of design-oriented individuals through workshops, events, and hands-on projects.
                </p>
            </div>
            <div className='mission-section'>
                <h3>Our Mission</h3>
                <p>Striving to create a community of designers who are passionate about UI/UX and product design and who are committed to improving the user experience of digital products and services with the University of Florida. We seek to promote awareness, provide its members with opportunities, connect its members with industry professionals and, encourage collaboration and teamwork.
</p>
            </div>
            <div className='focus-fields'>
                <h2>Focus Fields</h2>
                <div className='three-sections'>
                    <div className='ux'>
                        <img src={UX}></img>
                        <h4>User Experience</h4>
                    </div>
                    <div className='ui'>
                        <img src={UI}></img>
                        <h4>User Interface</h4>
                    </div>
                    <div className='pd'>
                        <img src={PD}></img>
                        <h4>Product Design</h4>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='our-history'>
                <h2 className='our-history-title'>Our History</h2>
                <div className='timeline-container'>
                    <img className='timeline' src={timline}></img>
                    <img className='mobile-timeline' src={mobileTimeline} alt="Mobile Timeline"></img>
                </div>
            </div>
        </div>
    )
}

export default About