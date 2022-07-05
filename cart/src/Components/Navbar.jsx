import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = ({user}) => {

  const logout = () =>{
    window.open("http://localhost:5000/auth/logout","_self");
  };

  return (
    <div className='navbar' >
        <span className='logo'>
          <Link className='link' to="/">Social Login App</Link></span>
          {user ? (
        <ul className='list'>
            <li className='listItem' >
            <li className='listItem'>{user.displayName}</li>
            <li className='listItem' onClick={logout}>Log Out</li>
            <img src={user.photos[0].value} alt="" className="avatar"/>
            </li>
        </ul>
        ) : (<Link className="nav_login" to="login">Login</Link>)
          }

    </div>
  )
}

export default Navbar