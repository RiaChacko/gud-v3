import './Design-Teams.css'
import fydtImg from '../assets/fydtSpring.png'
import gudImg from '../assets/GUD Team Image.png'
import colorStack from '../assets/ColorStack.png'
import devlup from '../assets/Devlup.png'
import fydtFall from '../assets/fydtfall.png'
import { useNavigate } from 'react-router-dom';
import ContactUs from '../components/ContactUs'
function DesignTeams() {
    const navigate = useNavigate();
    return (
        <div className="dt-container">
        <h1>GUD Design Teams</h1>
        <div className='design-team-desc'>
            <h3>What is a Design Team?</h3>
            <p>A design team consists of a group of creative specialists who collaborate to use design to solve complex problems. Typically, this diversified team consists of researchers, graphic designers, UX designers, and UI designers, each of whom contributes their specific expertise. They work together to understand user needs and behaviors to create designs that are easy to use, accessible, and visually appealing for a range of goods, services, or systems. Their goal is to enhance user satisfaction and ensure that every aspect of the user's interaction with a product or service is thoughtfully considered and optimized for usability and aesthetic appeal.</p>
        </div>
        <div className='five-sections'>
            <div className='teams-gud' onClick={()=>navigate('/individual')}>
            <div className='fydt-img'>
                   <img src={gudImg}></img> 
                </div>
                <div className='heading-desc'>
                    <h3>GUD Website Design Team</h3>
                    <p>This team was tasked to create this very website. 
                    From initial user research to final implementation, this team did it all.</p>
                </div>

            </div>
            <div className='teams-fydt'>
                <div className='fydt-img'>
                   <img src={fydtImg}></img> 
                </div>
                <div className='heading-desc'>
                    <h3>FYDT Spring 2024</h3>
                    <p>This is the first year design team for Spring 2024.</p>
                </div>

            </div>
            <div className='teams-colorstack'>
            <div className='fydt-img'>
                   <img src={colorStack}></img> 
                </div>
                <div className='heading-desc'>
                    <h3>Colorstack Design Team</h3>
                    <p>This team collaborated with Colorstack and designed their Website.</p>
                </div>

            </div>
            <div className='teams-devlup'>

            <div className='fydt-img'>
                   <img src={devlup}></img> 
                </div>
                <div className='heading-desc'>
                    <h3>DevLup Design Team</h3>
                    <p>This team designed the DevLup wesbite!</p>
                </div>


            </div>
            <div className='teams-fydt23'>
            <div className='fydt-img'>
                   <img src={fydtFall}></img> 
                </div>
                <div className='heading-desc'>
                    <h3>FYDT Fall 2023</h3>
                    <p>This is the First-year design team for Fall 2023.</p>
                </div>


            </div>
        </div>
        <div className='request-desc'>
            <h3>Request a Design Team!</h3>
            <p>Looking to elevate your project with professional design expertise? You're in the perfect spot! GUD is ready to match you with a specialized design team that aligns with your project's specific needs. We are experts at assembling talented teams that are tailored to the particular needs of your project. We can assist you at any stage of the process, from brainstorming to delivering the finished product. Contact us by email at guduf@gmail.com to begin working on your project. Let's create something amazing together!</p>
            </div>
            <ContactUs/>
        </div>
        
    )
}

export default DesignTeams