import './EboardCard.css'
import linkedin from '../assets/linkedin-logo.svg'

const EboardCard = ({name, headshot, position, linkedinLink}) => {
    return (
        <div className="eboard-card-container">
            {/* <div className='eboard-image'></div> */}
            <img className='eboard-image' src={headshot}></img>
            <h3 className='eboard-name'>{name}</h3>
            <p className='eboard-position'>{position}</p>
            <a href={linkedinLink} target="_blank">
                <img className='eboard-icon' src={linkedin}></img>
            </a>
            
        </div>
    )
}

export default EboardCard