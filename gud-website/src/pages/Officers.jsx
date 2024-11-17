import './Officers.css'
import EboardCard from '../components/EboardCard'
import chrislian from '../assets/eboard/chrislian.svg'
import EboardSection from '../components/EboardSection'
import DirectorsSection from '../components/DirectorsSection'

function Officers() {
    return (
        <div className="officers-container">
            <h1>Officers 2024-2025</h1>
            <h2 className='e-board'>Executive Board</h2>
            <h2 className='e-board-mobile'>Meet the E-Board</h2>
            <EboardSection/>
            <h2 className='directors-heading'>Directors</h2>
            <DirectorsSection/>
        </div>
    )
}

export default Officers