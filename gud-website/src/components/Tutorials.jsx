import "../pages/Resources.css"
import ResourceCard from "./ResourceCard"
import figjam from '../assets/tutorials/figjam-logo.svg'
import figma from '../assets/tutorials/figma-logo.svg'
import adobe from '../assets/tutorials/adobe-xd-logo.svg'
import xd from '../assets/tutorials/xd-shortcuts-logo.svg'
import ui from '../assets/tutorials/ui-ux-thumbnail.svg'
import designThinking from '../assets/tutorials/design-thinking-thumbnail.svg'
import ab from '../assets/tutorials/ab-testing-thumbnail.svg'
import ux from '../assets/tutorials/ux-researcher-thumbnail.svg'

const Tutorials = () => {
    const tutorials = [
        {image: figjam, title: 'Figjam Basics', type: 'Webpage', description: 'Never tried Figjam? This link teaches you everything you need to know!', button: 'Learn More', url:'https://help.figma.com/hc/en-us/articles/1500004362321-Guide-to-FigJam'},
        {image: figma, title: 'Figma Shortcuts', type: 'Webpage', description: 'A website that shows you all the available shortcuts in Figma.', button: 'Learn More', url:'https://shortcuts.design/tools/toolspage-figma/'},
        {image: adobe, title: 'Adobe XD Basics', type: 'Webpage', description: 'This website will teach you Adobe XD basics.', button: 'Learn More', url: 'https://helpx.adobe.com/xd/user-guide.html'},
        {image: xd, title: 'XD Shortcuts', type: 'Webpage', description: 'A website that shows you all the shortcuts available in Adobe XD.', button: 'Learn More', url:'https://helpx.adobe.com/xd/help/keyboard-shortcuts.html'},
        {image: ui, title: 'UI vs UX', type: 'Video', description: 'This video will teach you the difference between UI and UX.', button: 'Learn More', url:'https://www.youtube.com/watch?v=5CxXhyhT6Fc'},
        {image: designThinking, title: 'Design Thinking', type: 'Video', description: 'This video discusses what design thinking is and how to use it.', button: 'Learn More', url:'https://www.youtube.com/watch?v=_WI3B54m6SU&pp=ygUdZGVzaWduIHRoaW5raW5nIGhvdyB0byB1c2UgaXQ%3D'},
        {image: ab, title: 'A/B Testing', type: 'Video', description: 'This video discusses what A/B testing is and how to use it.', button: 'Learn More', url:'https://www.youtube.com/watch?v=zFMgpxG-chM&pp=ygUMYS9iIHRlc3Rpbmcg'},
        {image: ux, title: 'UX Researcher', type: 'Video', description: 'This video shows how to become a User Experience researcher.', button: 'Learn More', url: 'https://www.youtube.com/watch?v=LmCwvZ-1P3E&pp=ygUadXggcmVzZWFyY2hlciB3aGF0IHRoZXkgZG8%3D'}
    ]

    return (
        <div className="resources">
            {tutorials.map((tutorial, index) => (
                <ResourceCard key={index} image={tutorial.image} title={tutorial.title} type={tutorial.type} description={tutorial.description} button={tutorial.button} url={tutorial.url}/>
            ))}
        </div>
    )
}

export default Tutorials