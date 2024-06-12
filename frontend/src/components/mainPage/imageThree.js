import { Parallax } from 'react-parallax';
import Indywidualne from './img/rozgrywki.jpg';
import { Link } from 'react-router-dom';
import './style.css';

const ImageThree = () => (
    <Parallax className='image' bgImage={Indywidualne} strength={800}>
        <div className='content'>
            <Link to="./indywidualne" className='img-txt'>Rozgrywki indywidualne</Link>
        </div>
    </Parallax>
);

export default ImageThree