import './Gallery.css'
import g11 from '../assets/gallery/gallery11.svg'
import g12 from '../assets/gallery/gallery12.svg'
import g13 from '../assets/gallery/gallery13.svg'
import g21 from '../assets/gallery/gallery21.svg'
import g22 from '../assets/gallery/gallery22.svg'
import g23 from '../assets/gallery/gallery23.svg'
import g31 from '../assets/gallery/gallery31.svg'
import g32 from '../assets/gallery/gallery32.svg'

const Gallery = () => {

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className='photos-container'>
                <div className='row'>
                    <img className='gallery-pic' src={g11}></img>
                    <img className='gallery-pic' src={g12}></img>
                    <img className='gallery-pic' src={g13}></img>
                </div>
                <div className='row'>
                    <img className='gallery-pic' src={g21}></img>
                    <img className='gallery-pic' src={g22}></img>
                    <img className='gallery-pic' src={g23}></img>
                </div>
                <div className='row'>
                    <img className='gallery-pic' src={g31}></img>
                    <img className='gallery-pic' src={g32}></img>
                </div>
            </div>
        </div>
    )
}

export default Gallery