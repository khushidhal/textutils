import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
    <nav className={`navbar navbar-expand-lg ${props.mode} bg-body-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"style={{ color: '#bb86fc' }}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" style={{ color: '#e0e0e0' }}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" style={{ color: '#e0e0e0' }}>{props.aboutText}</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='dark'?'white':'white'} mx-5`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: '#e0e0e0' }}>Dark Mode</label>
    </div>
    </div>
  </div>
</nav>
</nav>
  )
}


Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string}; 

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
};
