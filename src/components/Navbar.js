import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';


export default function Navbar({mode,enabledark,heading}) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    
    {/* <a className="navbar-brand" to="/">title</a> */}
    <a className="navbar-brand" href="/">{heading}</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-a active" aria-current="page" to="/">Home</a> */}
          <button type="button" className="btn btn-outline-primary mx-3"><a href="/">Home</a></button>
          {/* <a to="/">Home</a> */}
        </li>
        <li className="nav-item">

          {/* <button type="button" className="btn btn-outline-primary mx-3"><a to="/About">About</a></button> */}
         
        </li>
      </ul>
      <div className={`form-check form-switch text-${mode=== 'light' ? 'dark' : 'light'} `}>
        <input className="form-check-input" onClick={enabledark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${mode=== 'light' ? 'dark' : 'light'} mode`}</label>
      </div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

  )
}
Navbar.propTypes={
    mode:PropTypes.string
}

// Navbar.defaultProps = {
//     title: 'Mary me',
//     contact:'mee'
//   }