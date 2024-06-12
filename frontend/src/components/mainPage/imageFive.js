import { Parallax } from 'react-parallax';
import Sędziowie from './img/sędziowie.jpg';
import { Link } from 'react-router-dom';
import './style.css';

const ImageFive = () => (
    <Parallax className='image' bgImage={Sędziowie} strength={800}>
        <div className='content'>
            <Link to="/sędziowie" className='img-txt'>Kącik sędziowski</Link>
        </div>
    </Parallax>
);

export default ImageFive