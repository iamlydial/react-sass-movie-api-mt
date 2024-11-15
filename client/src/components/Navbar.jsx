import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <h1><a href='/'>CineScout</a></h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/wishlist">Wishlist</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
