import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
 
const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'><h1>J69Stream</h1></Link>
            <div className='right menu'>
                <Link to='/' className='item'><h1>All Streams</h1></Link>
                <GoogleAuth></GoogleAuth>
            </div>
        </div>
    )
}

export default Header;

