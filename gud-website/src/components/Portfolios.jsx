import "../pages/Resources.css"
import ResourceCard from "./ResourceCard"
import p1 from '../assets/portfolios/grace.svg'
import p2 from '../assets/portfolios/jayse.svg'
import p3 from '../assets/portfolios/henry.svg'
import p4 from '../assets/portfolios/elizabeth.svg'
import p5 from '../assets/portfolios/gloria.svg'


function Portfolios() {
    const portfolios = [
        {image: p1, title: 'Grace Ling', type: 'Webpage', description: 'Grace Ling is a Product Designer for Electronic Arts.', button: 'View', url: 'https://www.grace-ling.com/'},
        {image: p2, title: 'Jayse Hansen', type: 'Webpage', description: 'Jayse Hansen is a UI Designer who creates futuristic HUDs for film.', button: 'View', url: 'https://jayse.io/'},
        {image: p3, title: 'Henry Dan', type: 'Webpage', description: 'Henry Dan is a freelance  UI/UX designer with 7 years of experience.', button: 'View', url: 'https://henrydan.me/'},
        {image: p4, title: 'Elizabeth Lin', type: 'Webpage', description: 'Elizabeth Lin is a UI designer at Google who specializes in AI.', button: 'View', url:'https://www.elizabethylin.com/'},
        {image: p5, title: 'Gloria Lo', type: 'Webpage', description: 'Gloria Lo is a Product Designer who specializes in designing software.', button: 'View', url:'https://www.glorialo.design/'}
    ]

    return (
        <div className="resources">
            {portfolios.map((portfolio, index) => (
                <ResourceCard key={index} image={portfolio.image} title={portfolio.title} type={portfolio.type} description={portfolio.description} button={portfolio.button} url={portfolio.url}/>
            ))}
        </div>
    )
}

export default Portfolios