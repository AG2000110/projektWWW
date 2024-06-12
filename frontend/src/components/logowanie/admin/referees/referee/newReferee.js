import React, { useState } from "react";

function NewReferee(props){

    const [showForm, setShowForm] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [class2, setClass2] = useState('')
    const [license, setLicense] = useState('')

    const changeFirstName = event => {
        const value = event.target.value;
        setFirstName(value);
    }

    const changeLastName = event => {
        const value = event.target.value;
        setLastName(value);
    }

    const changeClass2 = event => {
        const value = event.target.value;
        setClass2(value);
    }

    const changeLicense = event => {
        const value = event.target.value;
        setLicense(value);
    }

    const addReferee = () => {
        const referee = {
            firstName: firstName,
            lastName: lastName,
            class2: class2,
            license: license
        };
        props.onAdd(referee);
    
        setFirstName('');
        setLastName('');
        setClass2('');
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
            <label>Klasa: </label>
            <input type="text"
                value={class2}
                onChange={changeClass2}
            ></input>
            <label>Nr licencji: </label>
            <input type="text"
                value={license}
                onChange={changeLicense}
            ></input>
            <br/>
            <button onClick={addReferee}>Dodaj sędziego</button>
            <br/>
            <br/>
        </div>
        ) : (
            <button onClick={() => setShowForm(true)} disabled = {props.role !== 'admin'}>Nowy sędzia</button>
        )
    )
}
export default NewReferee