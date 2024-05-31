import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3001/me', {
                    headers: { 'x-access-token': token }
                });
                setUser(response.data);
            } catch (error) {
                console.error(error.response.data);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
