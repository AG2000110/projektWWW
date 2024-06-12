import { Parallax } from 'react-parallax';
import Galeria from './img/galeria.png';
import { Link } from 'react-router-dom';
import './style.css';

const ImageSix = () => (
    <Parallax className='image' bgImage={Galeria} strength={800}>
        <div className='content'>
            <Link to="/galeria" className='img-txt'>Galeria</Link>
        </div>
    </Parallax>
);

export default ImageSix