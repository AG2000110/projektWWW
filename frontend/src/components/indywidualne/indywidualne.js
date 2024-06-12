import { Link } from 'react-router-dom';

function Indywidualne() {
    return (
        <div>
          <h2>Cześć</h2>
          <p>Witaj w zakładce rozgrywki indywidualne. Wybierz turniej, który Cię interesuje, żeby zobaczyć wyniki.</p>
          <ul>
            <li><Link to="/seniorow1">I WTK Seniorów</Link></li>
            <li>II WTK Seniorów</li>
            <li>III WTK Seniorów</li>
            <li>MW Seniorów</li>
          </ul>
        </div>
    )

}

export default Indywidualne;
