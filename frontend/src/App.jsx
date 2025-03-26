import { useState } from 'react'
import './App.css'
import Home from './components/home'
import Landing from './components/landing'

/**
 * Conditionally renders landing/home page based on auth
 */
function App() {
  const [authToken, setAuthToken] = useState(null)

  return (
    <div className="app">
      {authToken ? (
        <Home />
      ) : (
        <Landing />
      )}
    </div>
  )
}

export default App
