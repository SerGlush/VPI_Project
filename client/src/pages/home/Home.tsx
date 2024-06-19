import './Home.scss'
import '../../Common.scss'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthentificationBox } from '../../components/AuthentificationBox'
import { AuthentificationContext } from '../../components/AuthentificationProvider'
import { OpenSessions } from '../../components/Session'

function HomePage() {
  const navigate = useNavigate();
  const {token} = useContext(AuthentificationContext)!;
  console.log(token);

  return (
    <>
      <header>
      </header>
      <main id='app-main'>
        <div className='top-panel'>
          <div className='menus-panel'>
            <button className='basic-button top-panel-button' onClick={() => navigate('/')}>Open Sessions
            </button>
          </div>
          {<AuthentificationBox />}
        </div>
        <div className='main-window'>
          <OpenSessions/>
          <div className='chat-panel'>chat-panel
          </div>
        </div>
      </main>
      <footer>
        <p className='footer'>Project VPI. Contact: <a href='mailto:shoka583@gmail.com'>shoka583@gmail.com</a></p>
      </footer>
    </>
  )
}

export default HomePage
