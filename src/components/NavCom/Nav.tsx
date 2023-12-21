import React from 'react'
import LinkNav from './LinkNav.tsx'
import LinkDrop from './LinkDrop.tsx'



import NavData , {NavDataDrop} from "../data/navData"
const generateNavItem = (data) => (
  data.map(item => (
    <LinkNav
      key={item.id} 
      name={item.name}
      link={item.link}
      className = {item.className}
    />
  ))
);

const NavItem = generateNavItem(NavData);
const NavItemDrop = generateNavItem(NavDataDrop);


const Nav = () => {
  return (
<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#c">
React Material UI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        {NavItem}

          <LinkDrop name="form">
          {NavItemDrop}
          </LinkDrop>
        </ul>
   
      </div>
    </div>
  </div>
</nav>  

)
}

export default Nav