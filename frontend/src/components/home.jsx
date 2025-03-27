import { Link } from 'react-router'

/**
 * Home page shows options to start/join game.
 */
function Home() {
  return (
    <div className="center-page">
      <Link to="/game" className='btn'>Create New Game</Link>
      <Link to="/game/join" className='btn'>Join with Code</Link>
    </div>
  )
}

export default Home