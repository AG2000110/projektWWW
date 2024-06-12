import React, { useState } from "react";

function NewPlayer(props){

    const [showForm, setShowForm] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [club, setClub] = useState('')
    const [license, setLicense] = useState('')


    const changeFirstName = event => {
        const value = event.target.value;
        setFirstName(value);
    }

    const changeLastName = event => {
        const value = event.target.value;
        setLastName(value);
    }

    const changeClub = event => {
        const value = event.target.value;
        setClub(value);
    }

    const changeLicense = event => {
        const value = event.target.value;
        setLicense(value);
    }

    const addPlayer = () => {
        const player = {
            firstName: firstName,
            lastName: lastName,
            club: club,
            license: license
        };
        console.log(player)
        props.onAdd(player);
    
        setFirstName('');
        setLastName('');
        setClub('');
        setLicense('');
        setShowForm(false);
    }
    

    return (
        showForm ? (
        <div className='note'>
            <label>Imię: </label>
            <input type="text"
                value={firstName}
                onChange={changeFirstName}
            ></input>
            <label>Nazwisko: </label>
            <input type="text"
                value={lastName}
                onChange={changeLastName}
            ></input>
            <label>Klub: </label>
            <input type="text"
                value={club}
                onChange={changeClub}
            ></input>
            <label>Nr licencji: </label>
            <input type="text"
                value={license}
                onChange={changeLicense}
            ></input>
            <br/>
            <button onClick={addPlayer}>Dodaj zawodnika</button>
            <br/>
            <br/>
        </div>
        ) : (
            <button onClick={() => setShowForm(true)} disabled={props.role !== 'klub' && props.role !== 'admin'}>Nowy zawodnik</button>
        )
    )
}
export default NewPlayer