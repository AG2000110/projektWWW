import React from 'react';

function Referee (props) {

    const editHandler = () => {
        props.onEdit({
            firstName: props.firstName, 
            lastName: props.lastName, 
            class2: props.class2, 
            license: props.license, 
            _id: props.id
        });
    }

    return (
        <tr key={props.id}>
            <td>{props.index + 1}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.class2}</td>
            <td>{props.license}</td>
            <td>
                <button onClick={editHandler} disabled = {props.role !== 'admin'}
                >edytuj</button></td>
            <td>
                <button 
                className='delete' 
                onClick={() => props.onDelete(props.id)} disabled = {props.role !== 'admin'}>usuń
                </button>
            </td>
        </tr>
    )
}

export default Referee;