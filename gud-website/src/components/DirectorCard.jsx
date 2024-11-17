
import './DirectorCard.css'
import linkedin from '../assets/linkedin-logo.svg'


const DirectorCard = ({name, headshot, position, linkedinLink}) => {
    return (
        <div className="director-card-container">
            {/* <div className='eboard-image'></div> */}
            <img className='director-image' src={headshot}></img>
            <h3 className='director-name'>{name}</h3>
            <p className='director-position'>{position}</p>
            <a href={linkedinLink} target="_blank">
                <img className='director-icon' src={linkedin}></img>
            </a>
            
        </div>
    )
}

export default DirectorCard;