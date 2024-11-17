import "./IndividualDesignTeam.css"
import GUD from "../assets/GUD-Individual/GUD-Team.png";
import Project from "../assets/GUD-Individual/GUD-2.png";
import Timeline from "../assets/GUD-Individual/GUD-Timeline.png";
import IndividualSection from "../components/IndividualSection";
import GUDMobile from "../assets/GUD-Individual/GUD-Team-Mobile.png";
import GUDTimelineMobile from "../assets/GUD-Individual/GUD-Timeline-Mobile.png";
function IndividualDesignTeam () {
    return <div className="GUD-Team">
        <img src={GUD}/>
        <img src={GUDMobile} className="mobile"/>
        <div className="project">
            <h2>The Project</h2>
            <img src={Project}/>
        </div>
        <div className="project-timeline">
            <h2>Project Timeline</h2>
            <img src={Timeline} className="timeline"/>
            <img src={GUDTimelineMobile} className="timeline-mobile"/>
        </div>
        <div className="team">
            <h2>Our Team</h2>
            <IndividualSection/>
            {/* <div className="row-1">
                <div className="card-1">
                    <div className="image">
                        <img src={Natalie}/>
                    </div>
                </div>
                <div className="card-1">
                    <div className="image">
                        <img src={Howard}/>
                    </div>

                </div>
                <div className="card-1">
                    <div className="image">
                        <img src={Jennifer}/>
                    </div>
                </div>
            </div>
            <div className="row-2">
                <div className="card-1">
                    <div className="image">
                        <img src={Thomas}/>
                    </div>
                </div>
                <div className="card-1">
                    <div className="image">
                        <img src={Kymani}/>
                    </div>
                </div>
            </div> */}
        </div>
    </div>

}


export default IndividualDesignTeam;