import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='headerContainer'>
        <div className='logoContainer'>
            <img src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className="logo" />
            <h1>Emre Eryiğit</h1>
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link> 
        </div>
    </div>
    
    </>
  )
}

export default Header