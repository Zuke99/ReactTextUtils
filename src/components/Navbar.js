import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">{props.abouttext}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="/">Disabled</a>
  </li>
</ul>
  )
}

Navbar.propTypes = {
  title : PropTypes.string,
  abouttext : PropTypes.string}
