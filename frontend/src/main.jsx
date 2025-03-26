import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import App from './App.jsx'
import Login from './components/account/login.jsx'
import Register from './components/account/register.jsx'
import ForgotPwd from './components/account/forgotPwd.jsx'
import Settings from './components/account/settings.jsx'
import Profile from './components/user/profile.jsx'
import ViewProfile from './components/user/viewProfile.jsx'
import CreateGame from './components/game/createGame.jsx'
import JoinGame from './components/game/joinGame.jsx'
import PlayGame from './components/game/playGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={< Register />} />
        <Route path="/forgot-pwd" element={< ForgotPwd />} />
        <Route path="/settings" element={< Settings />} />
        <Route path="/user" element={< Profile />} />
        <Route path="/user/:userID" element={< ViewProfile />} />
        <Route path="/game" element={< CreateGame />} />
        <Route path="/game/join" element={< JoinGame />} />
        <Route path="/game/:gameID" element={< PlayGame />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
