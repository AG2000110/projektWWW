import React from 'react';

function Club (props) {

    const editHandler = () => {
        props.onEdit({
            name: props.name, 
            city: props.city, 
            adress: props.adress, 
            _id: props.id
        });
    }

    return (
        <tr key={props.id}>
            <td>{props.index + 1}</td>
            <td>{props.name}</td>
            <td>{props.city}</td>
            <td>{props.adress}</td>
            <td>
                <button onClick={editHandler} disabled = {props.role !== 'admin'}
                >edytuj</button>
            </td>
            <td>
                <button 
                className='delete' 
                onClick={() => props.onDelete(props.id)} disabled = {props.role !== 'admin'}>usuń
                </button>
            </td>
        </tr>
    )
}

export default Club;