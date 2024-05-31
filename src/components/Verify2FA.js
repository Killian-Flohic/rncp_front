import React, { useState } from 'react';
import axios from 'axios';

const Verify2FA = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/verify-2fa', { code });
            // Handle successful verification, e.g., redirect user to dashboard
            console.log('2FA verification success:', response.data);
        } catch (error) {
            // Handle verification failure, e.g., display error message
            setError('Invalid 2FA');
        }
    };

    return (
        <div>
            <h2>Verify 2FA</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Verification Code:
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </label>
                <button type="submit">Verifier</button>
            </form>
        </div>
    );
};

export default Verify2FA;