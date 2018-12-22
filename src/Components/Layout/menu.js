import React from 'react'
import {Link} from 'react-router-dom'
export default function menu() {
  return (
    <ul className='nav'>
      <li className='nav-link'><Link to='/'>Home</Link></li>
      <li className='nav-link'><Link to='/Shows'>Shows</Link></li>
    </ul>
  )
}
