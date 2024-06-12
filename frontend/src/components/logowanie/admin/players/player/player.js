import React from 'react';

function Player (props) {

    const editHandler = () => {
        if(props.role !== 'klub' && props.role !== 'admin') {
            alert("Nie masz uprawnień do edycji zawodników");
            return;
        }
        props.onEdit({
            firstName: props.firstName, 
            lastName: props.lastName, 
            club: props.club, 
            license: props.license, 
            _id: props.id
        });
    }

    const deleteHandler = () => {
        if(props.role !== 'klub' && props.role !== 'admin') {
            alert("Nie masz uprawnień do usuwania zawodników");
            return;
        }
        props.onDelete(props.id);
    }

    return (
        <tr key={props.id}>
            <td>{props.index + 1}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.club}</td>
            <td>{props.license}</td>
            <td><button onClick={editHandler} disabled={props.role !== 'klub' && props.role !== 'admin'}>edytuj</button></td>
            <td><button className='delete' onClick={deleteHandler} disabled={props.role !== 'klub' && props.role !== 'admin'}>usuń</button></td>
        </tr>
    )
}

export default Player;
