import React, { useState } from 'react';
import axios from 'axios';

const Enable2FA = () => {
    const [qrCodeUrl, setQrCodeUrl] = useState(null);
    const [token, setToken] = useState('');

    const handleEnable2FA = async () => {

        try {
            const response = await axios.post('http://localhost:3001/Enable2FA', {}, {
                headers: { 'x-access-token': localStorage.getItem('token') }
            });
            // alert(response.data);
            setQrCodeUrl(response.data.qrCodeUrl);
        } catch (error) {
            console.error(error);
        }
    };

    const handleVerify2FA = async () => {
        console.log(localStorage.getItem('token'));
        try {
            const response = await axios.post('http://localhost:3001/Verify2FA', { token }, {

                headers: { 'x-access-token': localStorage.getItem('token') }
            });
            alert(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Enable 2FA</h2>
            <button onClick={handleEnable2FA}>Generate 2FA QR Code</button>
            {qrCodeUrl && (
                <div>
                    <img src={qrCodeUrl} alt="QR Code" />
                    <input
                        type="text"
                        placeholder="2FA token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                    <button onClick={handleVerify2FA}>Verifier 2FA</button>
                </div>
            )}
        </div>

    );
};

export default Enable2FA;