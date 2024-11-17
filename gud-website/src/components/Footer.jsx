import './Footer.css'
import logo from '../assets/GUD-logo.svg'
import instagram from '../assets/instagram-icon.svg'
import slack from '../assets/slack-icon.svg'
import linktree from '../assets/linktree-icon.svg'

function Footer() {
    return (
        <footer>
            <div className='text'>
                Contact Us
            </div>
            <div className='icons'>
                <div className="logo">
                    <a href="/" > 
                        <img href="/" src={logo}></img>
                    </a>
                </div>
                <ul className='logos'>
                    <li>
                        <a href='https://www.instagram.com/gatoruserdesign/' target="_blank" rel="noopener noreferrer">
                            <img className='icon' src={instagram} />
                        </a>
                    </li>

                    <li>
                        <a href='https://join.slack.com/t/gatoruserdesign/shared_invite/zt-1nofnnydf-75uKuXmWY8yXoKQsbl3NLw' target="_blank" rel="noopener noreferrer">
                            <img className='icon' src={slack} />
                        </a>
                    </li>

                    <li>
                        <a href='https://linktr.ee/gatoruserdesign' target="_blank" rel="noopener noreferrer">
                            <img className='icon' src={linktree} />
                        </a>
                    </li>
                </ul>
            </div>
    
            
            
            
        </footer>
    )
}

export default Footer