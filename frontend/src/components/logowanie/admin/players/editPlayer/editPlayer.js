import React, {useState } from "react";

function EditPlayer(props) {

    const [firstName, setFirstName] = useState(props.player.firstName)
    const [lastName, setLastName] = useState(props.player.lastName)
    const [club, setClub] = useState(props.player.club)
    const [license, setLicense] = useState(props.player.license)



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

    const editPlayer = () => {
        const player = {
            firstName: firstName,
            lastName: lastName,
            club: club,
            license: license,
            _id: props.id
        }
        props.onEdit(player)
    }

    return (
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
        <button onClick={() => editPlayer()}>Edytuj zawodnika</button>
        <br/>
        <br/>
    </div>   
    );
}

export default EditPlayer;
