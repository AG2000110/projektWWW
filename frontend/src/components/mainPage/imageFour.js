import { Parallax } from 'react-parallax';
import Terminarz from './img/terminarz.jpg';
import { Link } from 'react-router-dom';
import './style.css';

const ImageFour = () => (
    <Parallax className='image' bgImage={Terminarz} strength={800}>
        <div className='content'>
            <Link to="./terminarz" className='img-txt'>Terminarz</Link>
        </div>
    </Parallax>
);

export default ImageFour