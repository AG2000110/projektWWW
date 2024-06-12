import React, { useState } from "react";

function NewClub(props){

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [adress, setAdress] = useState('')

    const changeName = event => {
        const value = event.target.value;
        setName(value);
    }

    const changeCity = event => {
        const value = event.target.value;
        setCity(value);
    }

    const changeAdress = event => {
        const value = event.target.value;
        setAdress(value);
    }

    const addClub = () => {
        const club = {
            name: name,
            city: city,
            adress: adress
        };
        props.onAdd(club);
    
        setName('');
        setCity('');
        setAdress('');
        setShowForm(false);
    }


    return (
        showForm ? (
        <div className='note'>
            <label>Nazwa: </label>
            <input type="text"
                value={name}
                onChange={changeName}
            ></input>
            <label>Miasto: </label>
            <input type="text"
                value={city}
                onChange={changeCity}
            ></input>
            <label>Adres: </label>
            <input type="text"
                value={adress}
                onChange={changeAdress}
            ></input>
            <br/>
            <button onClick={addClub}>Dodaj klub</button>
            <br/>
            <br/>
        </div>
        ) : (
            <button onClick={() => setShowForm(true)} disabled = {props.role !== 'admin'}>Nowy klub</button>
        )
    )
}
export default NewClub;