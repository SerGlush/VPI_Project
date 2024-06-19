import './Registration.scss'
import '../../Common.scss'
import React from 'react'
import { RegistrationForm } from "../../components/RegistrationForm";

export function RegisterPage() {
    return (
        <>
            <header>
            </header>
            <main>
                <div className='register-page'>
                    <h1>Sign Up</h1>
                    <RegistrationForm />
                </div>
            </main>
        </>
    )
}