import './AuthentificationBox.scss'
import '../Common.scss'
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthentificationContext } from './AuthentificationProvider';

export function AuthentificationBox() {
    const navigate = useNavigate();
    const { userInfo } = useContext(AuthentificationContext)!;

    if (userInfo) {
        return (
            <div className='authorisation-panel'>{userInfo.username}</div>
        )
    }

    return (
        <div className='authorisation-panel'>
            <button className='basic-button' onClick={() => navigate('/login')}>Login</button>
            <button className='basic-button' onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}