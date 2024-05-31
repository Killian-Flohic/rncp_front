import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Banner;
