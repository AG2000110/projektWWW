import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin'); 

    let navigate = useNavigate();

    const handleRegister = async () => {
        const data = {
            userName: userName,
            password: password,
            role: role 
        }
        try {
            await axios.post('http://localhost:3001/api/register', data);
            console.log('Registered successful');
            alert('Zarejestrowano pomyślnie');
            navigate('/admin')
            

        }
        catch (error) {
            console.log('here is something wrong', error);
        }
    }

    return (
        <div>
            <h2>Utwórz konto</h2>
            <label>Nazwa użytkownika: </label><input type='text' name='userName' value={userName}
                onChange={(e) => setUserName(e.target.value)} />
            <br />
            <label>Hasło: </label><input type='text' name='password' value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <label>Rola: </label> 
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="sedzia">Sędzia</option>
                <option value="klub">Klub</option>
            </select>
            <br />
            <button onClick={handleRegister}>Zarejetruj</button>
        </div>
    )
}

export default Register;
