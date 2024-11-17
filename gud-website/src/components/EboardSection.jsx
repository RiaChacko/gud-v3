import './EboardSection.css'
import EboardCard from '../components/EboardCard'
import chrislian from '../assets/eboard/chrislian.svg'
import alexa from '../assets/eboard/alexa.svg'
import shaina from '../assets/eboard/shaina.svg'
import natalie from '../assets/eboard/natalie.svg'
import placeholder from "../assets/eboard/Placeholder.png"
import nydia from "../assets/eboard/Nydia.jpeg"
import colin from "../assets/eboard/colin.jpeg"
import sara from "../assets/eboard/sara.jpeg"


const EboardSection = () => {

    const eboards = [
        {name: 'Shaina Desroches', headshot: shaina, position: 'President', linkedinLink: 'https://www.linkedin.com/in/shaina-desroches/'},
        {name: 'Nydia Kushta', headshot: nydia, position: 'Internal Vice-President', linkedinLink: 'https://www.linkedin.com/in/nydiakushta/'},
        {name: 'Colin Mendoza', headshot: colin, position: 'External Vice-President', linkedinLink: 'https://www.linkedin.com/in/colin-mendoza/'},
        {name: 'Sara Myers', headshot: sara, position: 'Treasurer', linkedinLink: 'https://www.linkedin.com/in/sara-catherine-myers/'}
    ]

    return (
        <div className="eboard-section-container">
            {eboards.map((eboard, index) => (
                <EboardCard className='single-eboard-card' key={index} name={eboard.name} headshot={eboard.headshot} position={eboard.position} linkedinLink={eboard.linkedinLink}/>
            ))}
        </div>
    )
}

export default EboardSection