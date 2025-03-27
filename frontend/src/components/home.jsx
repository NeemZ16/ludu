import { Link } from 'react-router'

/**
 * Home page shows options to start/join game.
 */
function Home() {
  return (
    <>
      <Link to="/game">Create New Game</Link>
      <Link to="/game/join">Join with Code</Link>
    </>
  )
}

export default Home