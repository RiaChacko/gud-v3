import "../pages/Resources.css"
import ResourceCard from "./ResourceCard"
import r1 from '../assets/resumes/shaina.svg'
import r2 from '../assets/resumes/chrislian.svg'
import r3 from '../assets/resumes/alexa.svg'
import url1 from "../assets/resumes/Shaina Desroches Resume.pdf"
import url2 from "../assets/resumes/Chrislian_Daza_Resume.pdf"
import url3 from "../assets/resumes/Alexa Gonzalez-Resume.pdf"
function Resumes() {
    const resumes = [
        {image: r1, title: 'Shaina Example', type: 'PDF', description: 'GUD External Vice President Shaina’s Resume.', button: 'View', url: url1},
        {image: r2, title: 'Chrislian Example', type: 'PDF', description: 'GUD President Chrislian’s Resume.', button: 'View', url: url2},
        {image: r3, title: 'Alexa Example', type: 'PDF', description: 'Internal Vice President Alexa’s Resume.', button: 'View', url: url3}
    ]

    return (
        <div className="resources">
            {resumes.map((resume, index) => (
                <ResourceCard key={index} image={resume.image} title={resume.title} type={resume.type} description={resume.description} button={resume.button} url={resume.url}/>
            ))}
        </div>
    )
}

export default Resumes