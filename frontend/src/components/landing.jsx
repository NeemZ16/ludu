import { Link } from 'react-router'

function Landing() {
  return (
    <>
      <Link to='/login' className='btn'>log in</Link>
      <Link to='/register' className='btn'>register</Link>
      <Link to='/' className='btn'>play as guest</Link>
    </>
  )
}

export default Landing