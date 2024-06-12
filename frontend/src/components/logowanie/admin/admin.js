import React, { useState } from "react";
import Players from "./players/players";
import Clubs from "./clubs/clubs";
import Referees from "./referees/referees";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    // eslint-disable-next-line
    const [role, setRole] = useState(localStorage.getItem('userRole'));
    const navigate = useNavigate();

    const handleAddUser = () => {
        navigate('/register');
    }

    return (
        <div>
            <h1>Jesteś zalogowany jako {role}</h1>
            <Players />
            <Clubs />
            <Referees />
            <br/>
            {role === 'admin' && <button onClick={handleAddUser}>Utwórz konto</button>}
        </div>
    );
}

export default Admin;
