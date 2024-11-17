import "../pages/Resources.css"
import ResourceCard from "./ResourceCard"
import career from "../assets/careers/career.png";

function Careers() {
    const careers = [
        {image: career, title: 'List of Jobs', type: 'Job Openings', description: 'Check out the updated spreadsheet of job opportunities.', button: 'View Sheet', url: "https://docs.google.com/spreadsheets/d/11kpqU-jap6g4zRYWHal40AA_v36OPQP6xXUln9KFd5o/edit?usp=sharing"},
   
    ]

    return (
        <div className="resources">
            {careers.map((career, index) => (
                <ResourceCard key={index} image={career.image} title={career.title} type={career.type} description={career.description} button={career.button} url={career.url}/>
            ))}
        </div>
    )
}

export default Careers