import { Link } from 'react-router'

function Landing() {
  // landing page only shown when no auth token present

  return (
    <div className="center-page">
      <img src="logo.svg" alt="Ludu Online logo" />
      <div style={{display: 'flex', gap: '20px'}}>
        <Link to='/login' className='btn'>Log In</Link>
        <Link to='/register' className='btn'>Register</Link>
        <Link to='/' className='btn'>Play as Guest</Link>
      </div>
    </div>
  )
}

export default Landing