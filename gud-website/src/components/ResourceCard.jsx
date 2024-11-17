import './ResourceCard.css'

const ResourceCard = ({image, title, type, description, button, url}) => {
    return (
        <div className="resource-card-container">
            <img className='card-image' src={image}></img>
            <div className='card-content'>
                <h3 className='card-title'>{title}</h3>
                <h4 className='webpage'>{type}</h4>
                <p className='rc-description'>{description}</p>
                <a href={url} download target='_blank'><button className='learn-more-btn'>{button}</button></a>
            </div>
        </div>
    )
}

export default ResourceCard