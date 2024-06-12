import React, {useState } from "react";

function EditClub(props) {

    const [name, setName] = useState(props.club.name)
    const [city, setCity] = useState(props.club.city)
    const [adress, setAdress] = useState(props.club.adress)

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

    const editClub = () => {
        const club = {
            name: name,
            city: city,
            adress: adress,
            _id: props.id
        }
        props.onEdit(club)
    }


    return (
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
            <button onClick={() => editClub()}>Edytuj klub</button>
            <br/>
            <br/>
        </div>
    )
}

export default EditClub;
