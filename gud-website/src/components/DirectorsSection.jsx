
import './DirectorsSection.css'
import DirectorCard from '../components/DirectorCard'
import placeholder from "../assets/eboard/Placeholder.png"
import ankita from "../assets/directors/Ankita.jpg"
import laura from "../assets/directors/Laura.jpeg"
import georgina from "../assets/directors/Georgina.jpeg"
import misha from "../assets/directors/Misha.jpg"
import ria from "../assets/directors/Ria.jpeg"
import adela from "../assets/directors/Adella.jpg"
import anna from "../assets/directors/Anna.png"
import yuwei from "../assets/directors/Yuwei.png"
import maya from "../assets/directors/Maya.jpeg"
import thomas from "../assets/directors/Thomas.jpeg"

const DirectorsSection = () =>{
    const directors = [
        {name: 'Ankita Narayan', headshot: ankita, position: 'Secretary', linkedinLink: 'https://www.linkedin.com/in/ankita-narayan-b4193529a/?trk=public_profile_samename-profile'},
        {name: 'Laura Vuong', headshot: laura, position: 'Outreach Director', linkedinLink: 'https://www.linkedin.com/in/laura-v-875568237/'},
        {name: 'Georgina Vitola', headshot: georgina, position: 'Outreach Director', linkedinLink: 'https://www.linkedin.com/in/georgina-vitola-9b571a277/'},
        {name: 'Misha Shah', headshot: misha, position: 'Finance Director', linkedinLink: 'https://www.linkedin.com/in/misha-shah-562b83283/'},
        {name: 'Ria Chacko', headshot: ria, position: 'Webmaster', linkedinLink: 'https://www.linkedin.com/in/ria-chacko/'},
        {name: 'Adela Milkes', headshot: adela, position: 'Social Media Director', linkedinLink: 'https://www.linkedin.com/in/adela-milkes/'},
        {name: 'Anna Priore', headshot: anna, position: 'Photographer', linkedinLink: 'https://www.linkedin.com/in/anna-priore-02ab83242/'},
        {name: 'Yuwei Huang', headshot: yuwei, position: 'Photographer', linkedinLink: 'https://www.linkedin.com/in/yuwei-huang-/'},
        {name: 'Maya Rudo', headshot: maya, position: 'FYDT Mangaing Director', linkedinLink: 'https://www.linkedin.com/in/maya-rudo-6002bb279/'},
        {name: 'Thomas Kaw', headshot: thomas, position: 'FYDT Director', linkedinLink: 'https://www.linkedin.com/in/thomas-kaw/'}
    ]

    return (
        <div className="directors-section-container">
            {directors.map((director, index) => (
                <DirectorCard key={index} name={director.name} headshot={director.headshot} position={director.position} linkedinLink={director.linkedinLink}/>
            ))}
        </div>
    )
}

export default DirectorsSection;