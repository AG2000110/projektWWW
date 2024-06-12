import React, { useState } from 'react';
import './index.css';
import { NavLink, BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Ligowe from "./components/liga/ligowe";
import ImageOne from "./components/mainPage/imageOne";
import ImageTwo from "./components/mainPage/imageTwo";
import ImageThree from "./components/mainPage/imageThree";
import ImageFour from "./components/mainPage/imageFour";
import ImageFive from "./components/mainPage/imageFive";
import Header from "./components/header/header"
import Indywidualne from './components/indywidualne/indywidualne';
import Terminarz from './components/terminarz/terminarz';
import Sędziowie from './components/sędziowie/sędziowie';
import Galeria from './components/galeria/galeria';
import ImageSix from './components/mainPage/imageSix';
import Doggy1 from './components/galeria/img/doggy1';
import Doggy2 from './components/galeria/img/doggy2';
import Seniorow1 from './components/indywidualne/seniorow1/seniorow1';
import Admin from './components/logowanie/admin/admin';
import Register from './components/logowanie/register';
import Login from './components/logowanie/login';
import Liga1 from './components/liga/liga1';
import Liga2 from './components/liga/liga2';
import Liga3 from './components/liga/liga3';
import Wyniki from './components/indywidualne/wyniki';
import Rankingi from './components/indywidualne/rankingi';


function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  }

  const handleMouseLeave = () => {
    setActiveIndex(null);
  }

  const menuItems = [
    { path: '/', label: 'Strona główna' },
    { path: '/ligowe', label: 'Rozgrywki ligowe' },
    { path: '/indywidualne', label: 'Rozgrywki indywidualne' },
    { path: '/terminarz', label: 'Terminarz' },
    { path: '/sędziowie', label: 'Sędziowie' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/login', label: 'Logowanie'}
  ];

  return (
    <div>
      <Header/>
      <BrowserRouter>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li 
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={index === activeIndex ? 'active' : ''}
            >
              <NavLink to={item.path}>{item.label}</NavLink>
              {index === 1 && activeIndex === 1 && (
                <ul className="submenu">
                  <li><NavLink to="/ligowe/liga1">Liga 1</NavLink></li>
                 <li><NavLink to="/ligowe/liga2">Liga 2</NavLink></li>
                  <li><NavLink to="/ligowe/liga3">Liga 3</NavLink></li>
                </ul>
              )}
              {index === 2 && activeIndex === 2 && (
                <ul className="submenu">
                  <li><NavLink to="/indywidualne/wyniki">Wyniki turniejów</NavLink></li>
                  <li><NavLink to="/indywidualne/ranking">Lista rankingowe</NavLink></li>
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Routes>
          <Route path="/" element={<PageContent />} />
          <Route path="/ligowe" element={<Ligowe />} />
          <Route path="/ligowe/liga1" element={<Liga1 />} />
          <Route path="/ligowe/liga2" element={<Liga2 />} />
          <Route path="/ligowe/liga3" element={<Liga3 />} />
          <Route path="/indywidualne" element={<Indywidualne />} />
          <Route path="/indywidualne/wyniki" element={<Wyniki />} />
          <Route path="/indywidualne/ranking" element={<Rankingi />} />
          <Route path="/terminarz" element={<Terminarz />} />
          <Route path="/sędziowie" element={<Sędziowie />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/doggy1" element={<Doggy1/>} />
          <Route path="/doggy2" element={<Doggy2/>} />
          <Route path="/seniorow1" element={<Seniorow1/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

function PageContent() {
  const location = useLocation();

  return (
    location.pathname === '/' && (
      console.log('raz'),
      <>
        <ImageOne/>
        <ImageTwo/>
        <ImageThree/>
        <ImageFour/>
        <ImageFive/>
        <ImageSix/>
      </>
    )
  );
}

export default App;
