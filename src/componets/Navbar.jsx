import React, { FC } from 'react'
import { Link } from 'react-router-dom';

const Navbar:FC=()=> {
  return (
    <div className='header'>
      <div className="wrapper">
        <nav className="nav">
          <div className="logo">
            <Link to="/chat">chat</Link> 
          </div>
          <div className="login">

            <button>Войти</button>
            <button>Регистрация</button>
             <Link to="/">Sign  </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar