import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');

    let navigate = useNavigate();

    const handleLogin = async () => {
        const data = {
            userName: userName,
            password: password
        }
        let url = 'http://localhost:3001/api/login';
        if(role === 'sedzia') {
            url = 'http://localhost:3001/api/referee';
        } else if(role === 'klub') {
            url = 'http://localhost:3001/api/club';
        }
        axios.post(url, data)
        .then(res => {
            if(res.data.success){
                localStorage.setItem('userRole', role);
                navigate('/admin');
            }
            else{
                alert("Invalid username or password");
            }  
        })
        .catch(error => {
            console.log('Invalid', error);
        });

    }

    return (
        <div>
            <h2>Logowanie</h2>
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
            <button onClick={handleLogin}>Zaloguj</button>
        </div>
    )
}

export default Login;
