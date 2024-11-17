import './EventCard.css'

const EventCard = ({title, date, time_location}) => {

    return (
        <div className="event-card-container">
            <h3 className='event-card-title'>{title}</h3>
            <p className='event-card-paragraph'>{date}</p>
            <p className='event-card-paragraph'>{time_location}</p>
        </div>
    )
}

export default EventCard