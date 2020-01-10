import React, { useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button

} from 'reactstrap';

const NavBar = (props) => {


  return (
    <div>
      <Navbar style={{backgroundColor: '#1F2A4C'}}  light expand="md">
        <NavbarBrand style={{color: 'white'}}  href="/">Farm Fresh</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink  style={{color: 'white'}}  class='navitem' href="/">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}}  href="/">Farms</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}}  href="/">Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}}   href="/Login">Sign In</NavLink>
            </NavItem>
          </Nav>
          <Button style={{backgroundColor: '#7FAECC' }}>Click Here To Sell</Button>{' '}
      </Navbar>
    
    </div>
  );
}
{/*<button style={{backgroundColor: '#7FAECC' , borderRadius: "10px", border: "none", color:'white'}}>Click Here To Sell </button>*/}
export default NavBar;