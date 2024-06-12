import { Parallax } from 'react-parallax';
import Liga from './img/liga.jpg';
import { Link } from 'react-router-dom';
import './style.css';



const ImageTwo = () => (
    <Parallax className='image' bgImage={Liga} strength={800}>
        <div className='content'>
            <Link to="./ligowe" className='img-txt'>Rozgrywki ligowe</Link>
        </div>
    </Parallax>
);

export default ImageTwo