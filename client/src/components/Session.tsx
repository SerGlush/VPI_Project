import { useNavigate } from 'react-router-dom';
import './Session.scss'
import React, { useState } from 'react'
import { Message } from '../../../shared';

export function OpenSessions() {
    const [sessionStorage, sessionStorageSet] = useState<Array<Session> | undefined>();
    class Session {
        name: string;
        image_path: string;
        participants: Array<string>;

        constructor(name: string, image_path: string, participants: Array<string>) {
            this.name = name;
            this.image_path = image_path;
            this.participants = participants;
        }
    }
    function parseParticipants(arr: Array<string>) {
        var result = ''
        arr.forEach((part, i, arr) => {
            if (i != 0) result = result.concat(', ', part);
            else result = result.concat(part);
        })

        return result;
    }

    function renderSession(session: Session) {
        return (
        <div className='open-session-row'>
            <img width='160' height='100' src={session.image_path} className='open-session-image'></img>
            <div className='open-session-column'>
                <h1>{session.name}</h1>
                <div>{parseParticipants(session.participants)}</div>
            </div>
        </div>
        )
    }

    return (
        <div className='open-sessions-panel'>
            <h1 className='open-sessions-panel-title'>Open Sessions
            </h1>
            <div className='open-sessions-session-column'>
                {renderSession(new Session('VPI Dark Century', '../test_folder/9_khod_dlya_vsekh.png', ['SerGlush', 'Avtokrator', 'Sab-Zero']))}
                {renderSession(new Session('VPI New Times', '../test_folder/Fe6FLCsLD5s.png', ['Danis', 'Boris', 'Sab-Zero']))}
                {renderSession(new Session('VPI Boris Session', '../test_folder/VPI-ELEVATION.png', ['Avtokrator', 'SerGlush', 'Boris']))}
            </div>
        </div>
    )
}
