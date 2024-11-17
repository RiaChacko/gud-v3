import React from "react";
import "./Individual.css";
import linkedin from '../assets/linkedin-logo.svg';

const IndividualCard = ({ name, headshot, position, linkedinLink }) => {
    return (
        <div className="individual-card-container">
            <div className="image-container">
                <img src={headshot} alt={`${name}'s headshot`} />
            </div>
            <h3 className='individual-name'>{name}</h3>
            <div className='individual-icon-container'>
            <p className='individual-position'>{position}</p>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <img className='individual-icon' src={linkedin} alt="LinkedIn icon" />
                </a>
            </div>
        </div>
    );
}

export default IndividualCard;
