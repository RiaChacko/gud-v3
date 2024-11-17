import React, { useState } from 'react';
import Tutorials from '../components/Tutorials'
import Resumes from '../components/Resumes';
import Portfolios from '../components/Portfolios';
import Careers from '../components/Careers';
import './Resources.css'

function Resources() {
    const [resourceType, setResourceType] = useState('Tutorials');

    const renderComponent = () => {
        switch(resourceType) {
            case 'Tutorials':
                return <Tutorials/>;
            case 'Resumes':
                return <Resumes/>;
            case 'Portfolios':
                return <Portfolios/>;
            case 'Careers':
                return <Careers/>;
            default:
                return null;
        }
    }

    return (
        <div className="resources-container">
            <h1>Resources</h1>
            <ul>
                <li
                    className={resourceType === 'Tutorials' ? 'active' : ''}
                    onClick={() => setResourceType('Tutorials')}
                >
                    Tutorials
                </li>
                <li
                    className={resourceType === 'Resumes' ? 'active' : ''}
                    onClick={() => setResourceType('Resumes')}
                >
                    Resumes
                </li>
                <li
                    className={resourceType === 'Portfolios' ? 'active' : ''}
                    onClick={() => setResourceType('Portfolios')}
                >
                    Portfolios
                </li>
                <li
                    className={resourceType === 'Careers' ? 'active' : ''}
                    onClick={() => setResourceType('Careers')}
                >
                    Career Opportunities
                </li>
            </ul>
            <hr></hr>
            {renderComponent()}
        </div>
    )
}

export default Resources