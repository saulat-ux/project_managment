import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import Castle from '../assets/castle.svg'
import { useAuthContext } from '../hooks/useAuthContext'
import './navbar.css'

const Navbar = () => {
  const { logout , isPending} = useLogout()
  const {user} = useAuthContext()
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
            <img src={Castle} alt ='castle logo'/>
            <span>The Castle</span>
        </li>

       { !user && (
              <>
                <li> <Link to='/login'>Login</Link></li>
                <li> <Link to='/signup'>Signup</Link></li> 
              </>
       )}
          {user && (
             <>
               <li>
            {!isPending && <button className='btn' onClick={logout}>Logout</button>}
            { isPending && <button className='btn' disabled>Logging out...</button>}
             </li>
              </>
          )}
       
      </ul>
    </div>
  )
}

export default Navbar
