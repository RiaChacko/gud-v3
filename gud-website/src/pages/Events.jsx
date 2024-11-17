import EventCard from '../components/EventCard'
import './Events.css'

function Events() {

    const events = [
        {title: 'GBM #2', date: 'Tuesday, October 1st', time_location: '6:30pm in LIT 0109'},
        {title: 'Portfolio Workshop', date: 'Thursday, October 3rd', time_location: '6:30pm in WEIL 0238'},
        {title: 'Design Interview Challenge', date: 'Tuesday, October 8th', time_location: '6:30pm in LIT 0109'},
        {title: 'Design Open Hours', date: 'Thursday, October 10th', time_location: '6:30pm in the LIT 0113'},
        {title: 'Design Principles Workshop', date: 'Tuesday, October 15th', time_location: '6:30pm in the LIT 0109'},
        {title: 'Intermediate Figma Challenge', date: 'Tuesday, October 22nd', time_location: '6:30pm in the LIT 0109'},
        {title: 'Halloween Social', date: 'Thursday, October 24th', time_location: '6:30pm in the LIT 0121'}
    ]

    return (
        <div className="events-container">
            <h1>Events</h1>
            <h2 className='upcoming-events'>Upcoming Events</h2>
            <div className='upcoming-events-container'>
                {events.map((event, index) => (
                    <EventCard key={index} title={event.title} date={event.date} time_location={event.time_location}/>
                ))}
            </div>
            <h2>Calendar</h2>
            <div className='google-calendar'>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=MmViNjdkNTBmNjFmNGFmZDM3NzQwN2ViZGYxYjMxNTZmNTRmMWU2YTExYzE2ZGNlYjZkOTk4OTU5YzAxNTdmOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5" style={{borderWidth:0}} width="100%" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
    )
}

export default Events