import React from 'react'

const LinkNav = (props) => {
  return (
    <li className="nav-item">
    <a className="nav-link" aria-current="page" href={props.link}>{props.name}</a>
  </li>
  )
}

export default LinkNav