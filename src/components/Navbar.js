import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand " to="/">TextUtile</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">{props.Home} <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}

          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input " id="customSwitch1" onClick={props.toggle} />
          <label className={`custom-control-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="customSwitch1">Enable dark mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
