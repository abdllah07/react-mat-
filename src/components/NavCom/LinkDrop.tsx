import React from 'react'

const LinkDrop = (props) => {
  return (
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#c" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      {props.name}
    </a>
    <ul className="dropdown-menu dropdown-menu-dark">
        {props.children}
    </ul>
  </li>
  
  )
}

export default LinkDrop