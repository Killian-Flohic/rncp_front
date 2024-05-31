import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home</h2>
            <p>log in ou register</p>

            <button onClick={() => navigate('/Login')}>Login</button>

            <button onClick={() => navigate('/Register')}>Register</button>
        </div>
    );
};

export default Home;
