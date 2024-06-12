import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./seniorow1.css"

function Seniorow1() {
  const [zawodnicy, setZawodnicy] = useState([]);
  
    useEffect(()=>{
        axios.get('/wyniki1.json')
        .then(res => {
        const persons = res.data;
        setZawodnicy(persons.zawodnicy);
    })
    }, [])

  return (
    <div>
        <h2>I WTK Seniorów</h2>
      <table>
        <thead>
          <tr>
            <th>Miejsce</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Numer licencji</th>
            <th>Rok urodzenia</th>
            <th>Klub sportowy</th>
            <th>Ilość punktów</th>
          </tr>
        </thead>
        <tbody>
          {zawodnicy.map((zawodnik, index) => (
            <tr key={index}>
                <td>{zawodnik.zajęte_miejsce}</td>
                <td>{zawodnik.imię}</td>
                <td>{zawodnik.nazwisko}</td>
                <td>{zawodnik.numer_licencji}</td>
                <td>{zawodnik.rok_urodzenia}</td>
                <td>{zawodnik.klub_sportowy}</td>
                <td>{zawodnik.ilość_punktów}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Seniorow1;
