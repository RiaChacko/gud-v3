import React from "react";
import "./IndividualSection.css"
import IndividualCard from "../components/IndividualCard.jsx";
import placeholder from "../assets/eboard/Placeholder.png";
import natalie from "../assets/GUD-Individual/Natalie.png";
import howard from "../assets/GUD-Individual/Howard.png";
import jennifer from "../assets/GUD-Individual/Jennifer.png";
import thomas from "../assets/GUD-Individual/Thomas.png";
import kymani from "../assets/GUD-Individual/Kymani.png";

const IndividualSection = () => {
    const team = [
        {name: 'Natalie Sesodia', headshot: natalie, position: 'Project Manager', linkedinLink: 'https://www.linkedin.com/in/natalie-sesodia/'},
        {name: 'Howard Le', headshot: howard, position: 'Web Designer', linkedinLink: 'https://www.linkedin.com/in/howardle/'},
        {name: 'Jennifer Purington', headshot: jennifer, position: 'Web Designer', linkedinLink: 'https://www.linkedin.com/in/jennifer-purington623/'},
        {name: 'Thomas Kaw', headshot: thomas, position: 'Web Designer', linkedinLink: 'https://www.linkedin.com/in/thomas-kaw/'},
        {name: 'Kymani Brown', headshot: kymani, position: 'Web Designer', linkedinLink: 'https://www.linkedin.com/in/ky-mani-brown/'}
    ]

    return (
        <div className="individual-section-container">
            {team.map((team, index) => (
                <IndividualCard key={index} name={team.name} headshot={team.headshot} position={team.position} linkedinLink={team.linkedinLink}/>
            ))}
        </div>
    )

}

export default IndividualSection;