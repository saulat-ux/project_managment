import './sidebar.css'
import { NavLink } from 'react-router-dom'
import dashboard from '../assets/dashboard.svg'
import add from '../assets/add.svg'
import { useAuthContext } from '../hooks/useAuthContext'

import React from 'react'
import Avatar from './Avatar';

const Sidebar = () => {
    const {user} = useAuthContext()
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
               <Avatar src= {user.photoURL}/>
                <p>hey {user.displayName}</p>
            </div>
            <nav className='links'>
                <ul>
                    <li>
                        <NavLink to='/'>
                                <img src={dashboard} alt='dashboard icon'/>
                                    <span>Dashboard</span>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/create'>
                                <img src={add} alt='add project icon'/>
                                    <span>New Project</span>

                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
      
    </div>
  )
}

export default Sidebar
