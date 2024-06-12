import { Link } from "react-router-dom";
import "./galeria.css";


function Galeria() {


  return (
    <div className="galeria">
      <h2>Cześć!</h2>
      <p>Witaj w zakładce galeria. Aby skomentować kliknij na zdjęcie (-:</p>
      <br></br>
      <div className="image-container">
        <Link to="/doggy1" className="img1">
          <img className="img1" src="https://i.wpimg.pl/800x0/kochamyzwierzaki-pl.wpcdn.pl/img/2019/08/slodkie-pieski-1.jpg" alt="pieski1"></img>
        </Link>
        <Link to="/doggy2" className="img2">
          <img className="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcyxZbdVv2QYAlTv2gcGkqhsXNs7eBPJwCw&s" alt="pieski2"></img>
        </Link>
      </div>
    </div>
  );
}

export default Galeria;
