import '../Common.scss'
import React, { useContext } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGetUserMessage, createRegistrationMessage, sendMessage } from "../api";
import { AuthentificationContext } from './AuthentificationProvider';

export function RegistrationForm() {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | undefined>();
    const {setToken, setUserInfo} = useContext(AuthentificationContext)!;
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await sendMessage(createRegistrationMessage({
                email,
                username,
                password
            }));
            const user = await sendMessage(createGetUserMessage(response.token));
            setUserInfo(user);
            setToken(response.token);
            navigate('/');
        } catch (error) {
            console.error(error);
            setError("Invalid Credentials!");
        }
    }

    return (
        <div className='register-page-box'>
            <div className='register-page-box-row'>
                <div className='register-page-box-column'>
                    <div>Email</div>
                    <div>Username</div>
                    <div>Password</div>
                </div>
                <div className='register-page-box-column'>
                    <input value={email} type='text' id='email' onChange={event => setEmail(event.target.value)} />
                    <input value={username} type='text' id='username' onChange={event => setUsername(event.target.value)} />
                    <input value={password} type='password' id='password' onChange={event => setPassword(event.target.value)} />
                </div>
            </div>
            {error && (
                <p className='error-message'>{error}</p>
            )}
            <button className='register-page-button' onClick={handleSubmit}>Register</button>
        </div>
    )
}