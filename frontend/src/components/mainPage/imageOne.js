import { Parallax } from 'react-parallax';
import TableTennis from './img/tło.jpg';
import { Link } from 'react-router-dom';


const ImageOne = () => (
    <Parallax className='image' bgImage={TableTennis} strength={800}>
        <div className='content'>
            <Link to="/" className='img-txt'>Strona główna</Link>
        </div>
    </Parallax>
);

export default ImageOne