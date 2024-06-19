import './Login.scss'
import '../../Common.scss'
import React, { useContext } from 'react'
import { LoginForm } from '../../components/LoginForm';
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();

    return (
        <>
            <header>
            </header>
            <main>
                <div className='login-page'>
                    <h1>Log In</h1>
                    <LoginForm />
                </div>
            </main>
        </>
    )
}