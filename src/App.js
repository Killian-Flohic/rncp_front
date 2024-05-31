import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Enable2FA from './components/Enable2FA';
import Verify2FA from './components/Verify2FA';
import Banner from './components/Banner';


const App = () => {
	return (
		<Router>
			<div>
				<Banner />
				<Routes>
					<Route path="/" element={<Navigate to="/Home" />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/Register" element={<Register />} />
					<Route path="/Profile" element={<Profile />} />
					<Route path="/Enable2FA" element={<Enable2FA />} />
					<Route path="/Verify2FA" element={<Verify2FA />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
