import React, {useState } from "react";

function EditReferee(props) {

    const [firstName, setFirstName] = useState(props.referee.firstName)
    const [lastName, setLastName] = useState(props.referee.lastName)
    const [class2, setClass2] = useState(props.referee.class2)
    const [license, setLicense] = useState(props.referee.license)



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

    const editReferee = () => {
        const referee = {
            firstName: firstName,
            lastName: lastName,
            class2: class2,
            license: license,
            _id: props.id
        }
        props.onEdit(referee)
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
        <button onClick={() => editReferee()}>Edytuj sędziego</button>
        <br/>
        <br/>
    </div>   
    );
}

export default EditReferee;
