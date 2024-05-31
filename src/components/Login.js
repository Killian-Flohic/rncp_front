import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/Login', { username, password });
            if (response.data.twoFactorRequired) {
                localStorage.setItem('token', response.data.token);
                navigate('/Enable2FA', { userId: response.data.userId });
            } else {
                // Handle successful login
                localStorage.setItem('token', response.data.token);
                navigate('/Enable2FA', { userId: response.data.userId });
            }
        } catch (error) {
            console.log(error);
        // Handle error
        }

    };

    return (
        <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
