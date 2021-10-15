import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbr = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/About" className="nav-link">Aboutus</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/Contact" className="nav-link" >Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbr;
